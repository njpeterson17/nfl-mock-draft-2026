/**
 * ==========================================
 * LIVE DRAFT SYSTEM - MAIN MODULE
 * Real-time multi-user mock draft with:
 * - Lobby system for creating/joining drafts
 * - Draft room with live updates (localStorage-based)
 * - Chat system with mentions and emoji
 * - Queue/Auto-draft functionality
 * - AI for empty teams
 * - WebSocket-ready architecture
 * ==========================================
 */

// ==========================================
// CONFIGURATION & CONSTANTS
// ==========================================
const CONFIG = {
  STORAGE_PREFIX: 'nfl_mock_draft_2026_',
  UPDATE_INTERVAL: 1000, // Poll every second
  AI_DELAY_MIN: 2000,
  AI_DELAY_MAX: 5000,
  MAX_CHAT_HISTORY: 100,
  DEFAULT_TIMER: 60,
  POSITIONS: ['QB', 'RB', 'WR', 'TE', 'OT', 'IOL', 'EDGE', 'DL', 'LB', 'CB', 'S']
};

// NFL Teams for 2026 draft order
const NFL_TEAMS = [
  { code: 'LV', name: 'Raiders', city: 'Las Vegas', colors: { primary: '#000000', secondary: '#A5ACAF' } },
  { code: 'NYJ', name: 'Jets', city: 'New York', colors: { primary: '#125740', secondary: 'white' } },
  { code: 'ARI', name: 'Cardinals', city: 'Arizona', colors: { primary: '#97233F', secondary: '#000000' } },
  { code: 'CLE', name: 'Browns', city: 'Cleveland', colors: { primary: '#311D00', secondary: '#FF3C00' } },
  { code: 'TEN', name: 'Titans', city: 'Tennessee', colors: { primary: '#0C2340', secondary: '#4C8FB6' } },
  { code: 'CAR', name: 'Panthers', city: 'Carolina', colors: { primary: '#0085CA', secondary: '#101820' } },
  { code: 'WAS', name: 'Commanders', city: 'Washington', colors: { primary: '#773141', secondary: '#FFB612' } },
  { code: 'NO', name: 'Saints', city: 'New Orleans', colors: { primary: '#101820', secondary: '#D3BC8D' } },
  { code: 'CHI', name: 'Bears', city: 'Chicago', colors: { primary: '#0B162A', secondary: '#C83803' } },
  { code: 'GB', name: 'Packers', city: 'Green Bay', colors: { primary: '#203731', secondary: '#FFB612' } },
  { code: 'ATL', name: 'Falcons', city: 'Atlanta', colors: { primary: '#000000', secondary: '#A71930' } },
  { code: 'TB', name: 'Buccaneers', city: 'Tampa Bay', colors: { primary: '#5A1414', secondary: '#FFB612' } },
  { code: 'MIA', name: 'Dolphins', city: 'Miami', colors: { primary: '#008E97', secondary: '#FC4C02' } },
  { code: 'BAL', name: 'Ravens', city: 'Baltimore', colors: { primary: '#241773', secondary: '#9E7C0C' } },
  { code: 'IND', name: 'Colts', city: 'Indianapolis', colors: { primary: '#003594', secondary: '#FFB81C' } },
  { code: 'SF', name: '49ers', city: 'San Francisco', colors: { primary: '#AA0000', secondary: '#B3995D' } },
  { code: 'MIN', name: 'Vikings', city: 'Minnesota', colors: { primary: '#4F2683', secondary: '#FFC62F' } },
  { code: 'LAC', name: 'Chargers', city: 'Los Angeles', colors: { primary: '#0076B6', secondary: '#FFB81C' } },
  { code: 'KC', name: 'Chiefs', city: 'Kansas City', colors: { primary: '#E31837', secondary: '#FFB81C' } },
  { code: 'SEA', name: 'Seahawks', city: 'Seattle', colors: { primary: '#002244', secondary: '#69BE28' } },
  { code: 'BUF', name: 'Bills', city: 'Buffalo', colors: { primary: '#00338D', secondary: '#C60C30' } },
  { code: 'HOU', name: 'Texans', city: 'Houston', colors: { primary: '#03202F', secondary: '#A71930' } },
  { code: 'DAL', name: 'Cowboys', city: 'Dallas', colors: { primary: '#003594', secondary: '#869397' } },
  { code: 'PHI', name: 'Eagles', city: 'Philadelphia', colors: { primary: '#004C54', secondary: '#A5ACAF' } },
  { code: 'CIN', name: 'Bengals', city: 'Cincinnati', colors: { primary: '#FB4F14', secondary: 'black' } },
  { code: 'PIT', name: 'Steelers', city: 'Pittsburgh', colors: { primary: '#FFB612', secondary: '#101820' } },
  { code: 'DEN', name: 'Broncos', city: 'Denver', colors: { primary: '#FB4F14', secondary: '#002244' } },
  { code: 'LAR', name: 'Rams', city: 'Los Angeles', colors: { primary: '#003594', secondary: '#FFD100' } },
  { code: 'DET', name: 'Lions', city: 'Detroit', colors: { primary: '#0076B6', secondary: '#B0B7BC' } },
  { code: 'NYG', name: 'Giants', city: 'New York', colors: { primary: '#001E62', secondary: '#A5ACAF' } },
  { code: 'JAX', name: 'Jaguars', city: 'Jacksonville', colors: { primary: '#006778', secondary: '#D7A22A' } }
];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
const Utils = {
  generateId: () => Math.random().toString(36).substr(2, 9).toUpperCase(),
  
  generateRoomId: () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },
  
  getTimestamp: () => new Date().toISOString(),
  
  formatTime: (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  },
  
  formatTimeAgo: (timestamp) => {
    const diff = Date.now() - new Date(timestamp).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  },
  
  debounce: (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  },
  
  shuffle: (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  },
  
  getRandomItem: (array) => array[Math.floor(Math.random() * array.length)],
  
  escapeHtml: (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },
  
  parseMentions: (text) => {
    return text.replace(/@(\w+)/g, '<span class="mention">@$1</span>');
  }
};

// ==========================================
// STORAGE MANAGER (WebSocket-Ready)
// ==========================================
class StorageManager {
  constructor() {
    this.mode = 'localStorage'; // 'localStorage' | 'websocket'
    this.socket = null;
    this.callbacks = new Map();
    this.setupStorageListener();
  }
  
  setupStorageListener() {
    window.addEventListener('storage', (e) => {
      if (e.key && e.key.startsWith(CONFIG.STORAGE_PREFIX)) {
        const roomId = e.key.replace(CONFIG.STORAGE_PREFIX, '');
        if (this.callbacks.has(roomId)) {
          try {
            const data = JSON.parse(e.newValue);
            this.callbacks.get(roomId).forEach(cb => cb(data));
          } catch (err) {
            console.error('Error parsing storage data:', err);
          }
        }
      }
    });
  }
  
  // Subscribe to room updates
  subscribe(roomId, callback) {
    if (!this.callbacks.has(roomId)) {
      this.callbacks.set(roomId, new Set());
    }
    this.callbacks.get(roomId).add(callback);
  }
  
  // Unsubscribe from room updates
  unsubscribe(roomId, callback) {
    if (this.callbacks.has(roomId)) {
      this.callbacks.get(roomId).delete(callback);
    }
  }
  
  // Get room data
  getRoom(roomId) {
    const key = CONFIG.STORAGE_PREFIX + roomId;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  
  // Save room data
  saveRoom(roomId, data) {
    const key = CONFIG.STORAGE_PREFIX + roomId;
    localStorage.setItem(key, JSON.stringify(data));
    
    // Update active rooms list
    this.updateActiveRooms(roomId);
  }
  
  // Update list of active rooms
  updateActiveRooms(roomId) {
    const key = CONFIG.STORAGE_PREFIX + 'active_rooms';
    const rooms = JSON.parse(localStorage.getItem(key) || '[]');
    if (!rooms.includes(roomId)) {
      rooms.push(roomId);
      localStorage.setItem(key, JSON.stringify(rooms));
    }
  }
  
  // Get all active rooms
  getActiveRooms() {
    const key = CONFIG.STORAGE_PREFIX + 'active_rooms';
    const roomIds = JSON.parse(localStorage.getItem(key) || '[]');
    return roomIds
      .map(id => this.getRoom(id))
      .filter(room => room && this.isRoomActive(room));
  }
  
  // Check if room is still active (not expired)
  isRoomActive(room) {
    if (!room) return false;
    const lastActivity = new Date(room.lastActivity).getTime();
    const hoursSinceActivity = (Date.now() - lastActivity) / (1000 * 60 * 60);
    return hoursSinceActivity < 24; // Expire after 24 hours
  }
  
  // Clean up old rooms
  cleanup() {
    const key = CONFIG.STORAGE_PREFIX + 'active_rooms';
    const roomIds = JSON.parse(localStorage.getItem(key) || '[]');
    const activeRooms = roomIds.filter(id => {
      const room = this.getRoom(id);
      return this.isRoomActive(room);
    });
    localStorage.setItem(key, JSON.stringify(activeRooms));
  }
}

// ==========================================
// AI DRAFT BOT
// ==========================================
class DraftBot {
  constructor(difficulty = 'medium') {
    this.difficulty = difficulty;
  }
  
  // Make a pick for an AI team
  makePick(draftRoom) {
    const availablePlayers = draftRoom.availablePlayers;
    if (availablePlayers.length === 0) return null;
    
    // Get team's current needs based on picks already made
    const teamPicks = draftRoom.picks.filter(p => p.team === draftRoom.currentPick.team);
    const pickedPositions = teamPicks.map(p => p.player.position);
    
    // Score each available player
    const scoredPlayers = availablePlayers.map(player => {
      let score = player.rank || 50;
      
      // Adjust based on position needs (don't pick same position too much)
      const positionCount = pickedPositions.filter(p => p === player.position).length;
      score += positionCount * 20;
      
      // Randomness based on difficulty
      const randomFactor = this.difficulty === 'easy' ? 30 : 
                          this.difficulty === 'medium' ? 15 : 5;
      score += (Math.random() - 0.5) * randomFactor;
      
      return { player, score };
    });
    
    // Sort by score and pick the best
    scoredPlayers.sort((a, b) => a.score - b.score);
    return scoredPlayers[0].player;
  }
  
  // Generate AI username
  static generateUsername() {
    const prefixes = ['DraftBot', 'AI_Gm', 'AutoDraft', 'Computer', 'Sim'];
    const suffixes = ['9000', 'Pro', 'Elite', 'X', 'Prime', 'AI', 'Bot'];
    const numbers = Math.floor(Math.random() * 999);
    return `${Utils.getRandomItem(prefixes)}_${numbers}${Utils.getRandomItem(suffixes)}`;
  }
}

// ==========================================
// DRAFT ROOM MANAGER
// ==========================================
class DraftRoomManager {
  constructor() {
    this.storage = new StorageManager();
    this.currentRoom = null;
    this.currentUser = null;
    this.updateInterval = null;
    this.timerInterval = null;
    this.soundEnabled = true;
    this.draftQueue = [];
  }
  
  // Initialize user
  setUser(username) {
    const userId = CONFIG.STORAGE_PREFIX + 'user_' + Utils.generateId();
    this.currentUser = {
      id: userId,
      username: username,
      joinedAt: Utils.getTimestamp(),
      isOnline: true
    };
    this.saveUser();
    return this.currentUser;
  }
  
  // Save user to localStorage
  saveUser() {
    if (this.currentUser) {
      localStorage.setItem(CONFIG.STORAGE_PREFIX + 'current_user', JSON.stringify(this.currentUser));
    }
  }
  
  // Load user from localStorage
  loadUser() {
    const saved = localStorage.getItem(CONFIG.STORAGE_PREFIX + 'current_user');
    if (saved) {
      this.currentUser = JSON.parse(saved);
      return this.currentUser;
    }
    return null;
  }
  
  // Create a new draft room
  createDraft(settings) {
    const roomId = Utils.generateRoomId();
    const now = Utils.getTimestamp();
    
    // Build draft order based on settings
    const draftOrder = this.buildDraftOrder(settings.teams, settings.rounds);
    
    // Assign teams to users and AI
    const teamAssignments = this.assignTeams(draftOrder, settings.userTeam);
    
    const room = {
      id: roomId,
      status: 'waiting',
      settings: {
        rounds: settings.rounds,
        timer: settings.timer,
        teams: settings.teams,
        type: settings.type,
        createdAt: now
      },
      commissioner: this.currentUser.id,
      users: [{
        ...this.currentUser,
        role: 'commissioner',
        team: teamAssignments.userTeam,
        isReady: false,
        isOnline: true
      }],
      aiTeams: teamAssignments.aiTeams.map(team => ({
        id: 'ai_' + Utils.generateId(),
        username: DraftBot.generateUsername(),
        team: team,
        role: 'ai',
        isReady: true
      })),
      spectators: [],
      draftOrder: draftOrder,
      currentPick: {
        round: 1,
        pick: 1,
        overall: 1,
        team: draftOrder[0].team,
        userId: this.findTeamUser(draftOrder[0].team, [{
          ...this.currentUser,
          team: teamAssignments.userTeam
        }], teamAssignments.aiTeams)
      },
      picks: [],
      chat: [],
      availablePlayers: this.getAvailablePlayers(),
      lastActivity: now,
      timerEnd: null
    };
    
    this.storage.saveRoom(roomId, room);
    return room;
  }
  
  // Build draft order (snake draft for rounds after 1)
  buildDraftOrder(teamCount, rounds) {
    const order = [];
    const teams = NFL_TEAMS.slice(0, teamCount);
    
    for (let round = 1; round <= rounds; round++) {
      const roundTeams = round % 2 === 1 ? teams : [...teams].reverse();
      roundTeams.forEach((team, index) => {
        order.push({
          round: round,
          pick: round % 2 === 1 ? index + 1 : teamCount - index,
          overall: order.length + 1,
          team: team.code
        });
      });
    }
    
    return order;
  }
  
  // Assign teams to user and AI
  assignTeams(draftOrder, preferredTeam) {
    const allTeams = [...new Set(draftOrder.map(d => d.team))];
    let userTeam = preferredTeam;
    
    // If no preference or preferred taken, assign random
    if (!userTeam || !allTeams.includes(userTeam)) {
      userTeam = Utils.getRandomItem(allTeams);
    }
    
    const aiTeams = allTeams.filter(t => t !== userTeam);
    
    return { userTeam, aiTeams };
  }
  
  // Find which user/AI controls a team
  findTeamUser(teamCode, users, aiTeams) {
    const user = users.find(u => u.team === teamCode);
    if (user) return user.id;
    
    const ai = aiTeams.find(a => a.team === teamCode);
    if (ai) return ai.id;
    
    return null;
  }
  
  // Get available players from big board data
  getAvailablePlayers() {
    // Try to use global bigBoardData if available
    if (typeof bigBoardData !== 'undefined') {
      return bigBoardData.map((p, index) => ({
        id: `player_${index}`,
        name: p.name,
        position: p.position,
        school: p.school,
        rank: p.rank,
        height: p.height,
        weight: p.weight,
        grade: p.grade,
        tier: p.tier
      }));
    }
    
    // Fallback to sample data
    return [
      { id: 'p1', name: 'Fernando Mendoza', position: 'QB', school: 'Indiana', rank: 1 },
      { id: 'p2', name: 'Caleb Downs', position: 'S', school: 'Ohio State', rank: 2 },
      { id: 'p3', name: 'Arvell Reese', position: 'LB', school: 'Ohio State', rank: 3 },
      { id: 'p4', name: 'Jeremiyah Love', position: 'RB', school: 'Notre Dame', rank: 4 },
      { id: 'p5', name: 'Rueben Bain Jr.', position: 'EDGE', school: 'Miami', rank: 5 },
      { id: 'p6', name: 'Francis Mauigoa', position: 'OT', school: 'Miami', rank: 6 },
      { id: 'p7', name: 'Carnell Tate', position: 'WR', school: 'Ohio State', rank: 7 },
      { id: 'p8', name: 'Jermod McCoy', position: 'CB', school: 'Tennessee', rank: 8 }
    ];
  }
  
  // Join an existing room
  joinRoom(roomId, asSpectator = false) {
    const room = this.storage.getRoom(roomId);
    if (!room) return null;
    
    // Check if already in room
    const existingUser = room.users.find(u => u.id === this.currentUser.id);
    if (existingUser) {
      existingUser.isOnline = true;
    } else if (!asSpectator) {
      // Find available team
      const takenTeams = [...room.users, ...room.aiTeams].map(u => u.team);
      const availableTeam = room.draftOrder.find(d => !takenTeams.includes(d.team));
      
      if (availableTeam) {
        room.users.push({
          ...this.currentUser,
          role: 'drafter',
          team: availableTeam.team,
          isReady: false,
          isOnline: true
        });
        // Remove from AI teams
        room.aiTeams = room.aiTeams.filter(a => a.team !== availableTeam.team);
      } else {
        // No teams available, join as spectator
        asSpectator = true;
      }
    }
    
    if (asSpectator && !room.spectators.find(s => s.id === this.currentUser.id)) {
      room.spectators.push({
        ...this.currentUser,
        role: 'spectator'
      });
    }
    
    room.lastActivity = Utils.getTimestamp();
    this.storage.saveRoom(roomId, room);
    
    this.currentRoom = room;
    this.startSync();
    
    return room;
  }
  
  // Leave current room
  leaveRoom() {
    if (!this.currentRoom) return;
    
    this.stopSync();
    
    const room = this.storage.getRoom(this.currentRoom.id);
    if (room) {
      // Mark user as offline
      const user = room.users.find(u => u.id === this.currentUser.id);
      if (user) {
        user.isOnline = false;
        room.lastActivity = Utils.getTimestamp();
        this.storage.saveRoom(room.id, room);
      }
    }
    
    this.currentRoom = null;
  }
  
  // Start syncing room updates
  startSync() {
    if (!this.currentRoom) return;
    
    // Subscribe to storage updates
    this.storage.subscribe(this.currentRoom.id, (data) => {
      this.currentRoom = data;
      this.onRoomUpdate(data);
    });
    
    // Start update polling
    this.updateInterval = setInterval(() => {
      const room = this.storage.getRoom(this.currentRoom.id);
      if (room) {
        this.currentRoom = room;
        this.onRoomUpdate(room);
      }
    }, CONFIG.UPDATE_INTERVAL);
    
    // Start timer if draft is active
    if (this.currentRoom.status === 'active') {
      this.startTimer();
    }
  }
  
  // Stop syncing
  stopSync() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
    this.stopTimer();
    
    if (this.currentRoom) {
      this.storage.unsubscribe(this.currentRoom.id);
    }
  }
  
  // Handle room updates (to be overridden)
  onRoomUpdate(room) {
    // This will be overridden by the UI
  }
  
  // Make a pick
  makePick(player, skipNotification = false) {
    if (!this.currentRoom) return false;
    if (this.currentRoom.status !== 'active') return false;
    
    const currentPick = this.currentRoom.currentPick;
    const isUserTurn = currentPick.userId === this.currentUser.id;
    
    if (!isUserTurn && this.getUserRole() !== 'commissioner') {
      return false;
    }
    
    // Record the pick
    const pick = {
      round: currentPick.round,
      pick: currentPick.pick,
      overall: currentPick.overall,
      team: currentPick.team,
      userId: currentPick.userId,
      player: player,
      timestamp: Utils.getTimestamp()
    };
    
    this.currentRoom.picks.push(pick);
    
    // Remove player from available
    this.currentRoom.availablePlayers = this.currentRoom.availablePlayers.filter(
      p => p.id !== player.id
    );
    
    // Move to next pick
    this.advancePick();
    
    // Add system message
    this.addSystemMessage(`${this.getTeamName(currentPick.team)} selects ${player.name}`);
    
    // Show notification banner
    if (!skipNotification) {
      this.showPickNotification(currentPick.team, player);
    }
    
    // Save
    this.currentRoom.lastActivity = Utils.getTimestamp();
    this.storage.saveRoom(this.currentRoom.id, this.currentRoom);
    
    return true;
  }
  
  // Advance to next pick
  advancePick() {
    const currentOverall = this.currentRoom.currentPick.overall;
    const nextPick = this.currentRoom.draftOrder[currentOverall];
    
    if (!nextPick) {
      // Draft complete
      this.currentRoom.status = 'completed';
      this.currentRoom.currentPick = null;
      this.stopTimer();
      return;
    }
    
    // Find who controls this team
    const allParticipants = [...this.currentRoom.users, ...this.currentRoom.aiTeams];
    const controller = allParticipants.find(p => p.team === nextPick.team);
    
    this.currentRoom.currentPick = {
      round: nextPick.round,
      pick: nextPick.pick,
      overall: nextPick.overall,
      team: nextPick.team,
      userId: controller ? controller.id : null
    };
    
    // Reset timer
    this.resetTimer();
    
    // If AI's turn, schedule auto-pick
    if (controller && controller.role === 'ai') {
      this.scheduleAiPick();
    }
    
    // Check if it's user's turn
    this.checkUserTurn();
  }
  
  // Schedule AI pick
  scheduleAiPick() {
    const delay = CONFIG.AI_DELAY_MIN + Math.random() * (CONFIG.AI_DELAY_MAX - CONFIG.AI_DELAY_MIN);
    
    setTimeout(() => {
      if (this.currentRoom && this.currentRoom.status === 'active') {
        const bot = new DraftBot('medium');
        const player = bot.makePick(this.currentRoom);
        if (player) {
          this.makePick(player);
        }
      }
    }, delay);
  }
  
  // Check if it's user's turn and show notification
  checkUserTurn() {
    if (!this.currentRoom) return;
    
    const currentPick = this.currentRoom.currentPick;
    const existingBanner = document.querySelector('.your-turn-banner');
    
    if (currentPick && currentPick.userId === this.currentUser.id && 
        this.currentRoom.status === 'active') {
      this.showNotification('Your turn to pick!', 'info');
      this.playSound('yourTurn');
      
      // Show banner if not already showing
      if (!existingBanner) {
        const banner = document.createElement('div');
        banner.className = 'your-turn-banner';
        banner.innerHTML = `
          <span>⏰ YOU'RE ON THE CLOCK! - ${this.getTeamName(currentPick.team)}</span>
        `;
        document.body.insertBefore(banner, document.body.firstChild);
        
        // Remove when pick is made
        const checkPick = setInterval(() => {
          if (!this.currentRoom || 
              this.currentRoom.currentPick?.userId !== this.currentUser.id ||
              this.currentRoom.status !== 'active') {
            banner.remove();
            clearInterval(checkPick);
          }
        }, 1000);
      }
    } else if (existingBanner) {
      existingBanner.remove();
    }
  }
  
  // Start draft timer
  startTimer() {
    this.stopTimer();
    
    if (!this.currentRoom.settings.timer) return;
    
    const timerDuration = this.currentRoom.settings.timer * 1000;
    this.currentRoom.timerEnd = Date.now() + timerDuration;
    
    this.timerInterval = setInterval(() => {
      const remaining = Math.ceil((this.currentRoom.timerEnd - Date.now()) / 1000);
      
      if (remaining <= 0) {
        // Time's up - auto pick from queue or best available
        this.handleTimeout();
      }
      
      this.onTimerUpdate(Math.max(0, remaining));
    }, 100);
  }
  
  // Stop timer
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
  
  // Reset timer
  resetTimer() {
    if (this.currentRoom.settings.timer) {
      this.currentRoom.timerEnd = Date.now() + (this.currentRoom.settings.timer * 1000);
    }
  }
  
  // Handle timeout
  handleTimeout() {
    // Try to pick from queue first
    if (this.draftQueue.length > 0) {
      const playerId = this.draftQueue.shift();
      const player = this.currentRoom.availablePlayers.find(p => p.id === playerId);
      if (player) {
        this.makePick(player);
        this.showNotification(`Auto-selected ${player.name} from queue`, 'info');
        return;
      }
    }
    
    // Otherwise pick best available
    if (this.currentRoom.availablePlayers.length > 0) {
      const player = this.currentRoom.availablePlayers[0];
      this.makePick(player);
      this.showNotification(`Auto-selected ${player.name} (best available)`, 'info');
    }
  }
  
  // Timer update callback
  onTimerUpdate(seconds) {
    // To be overridden by UI
  }
  
  // Add to draft queue
  addToQueue(playerId) {
    if (!this.draftQueue.includes(playerId)) {
      this.draftQueue.push(playerId);
      this.saveQueue();
      return true;
    }
    return false;
  }
  
  // Remove from draft queue
  removeFromQueue(playerId) {
    this.draftQueue = this.draftQueue.filter(id => id !== playerId);
    this.saveQueue();
  }
  
  // Save queue to localStorage
  saveQueue() {
    if (this.currentRoom) {
      localStorage.setItem(
        CONFIG.STORAGE_PREFIX + 'queue_' + this.currentRoom.id,
        JSON.stringify(this.draftQueue)
      );
    }
  }
  
  // Load queue from localStorage
  loadQueue() {
    if (this.currentRoom) {
      const saved = localStorage.getItem(CONFIG.STORAGE_PREFIX + 'queue_' + this.currentRoom.id);
      if (saved) {
        this.draftQueue = JSON.parse(saved);
      }
    }
  }
  
  // Send chat message
  sendChat(message) {
    if (!this.currentRoom) return;
    
    const chatMessage = {
      id: Utils.generateId(),
      userId: this.currentUser.id,
      username: this.currentUser.username,
      message: message,
      timestamp: Utils.getTimestamp()
    };
    
    this.currentRoom.chat.push(chatMessage);
    
    // Keep only last N messages
    if (this.currentRoom.chat.length > CONFIG.MAX_CHAT_HISTORY) {
      this.currentRoom.chat = this.currentRoom.chat.slice(-CONFIG.MAX_CHAT_HISTORY);
    }
    
    this.currentRoom.lastActivity = Utils.getTimestamp();
    this.storage.saveRoom(this.currentRoom.id, this.currentRoom);
  }
  
  // Add system message
  addSystemMessage(message) {
    if (!this.currentRoom) return;
    
    this.currentRoom.chat.push({
      id: Utils.generateId(),
      system: true,
      message: message,
      timestamp: Utils.getTimestamp()
    });
    
    this.currentRoom.lastActivity = Utils.getTimestamp();
    this.storage.saveRoom(this.currentRoom.id, this.currentRoom);
  }
  
  // Get user's role in current room
  getUserRole() {
    if (!this.currentRoom) return null;
    
    const user = this.currentRoom.users.find(u => u.id === this.currentUser.id);
    return user ? user.role : 'spectator';
  }
  
  // Check if user is commissioner
  isCommissioner() {
    return this.getUserRole() === 'commissioner';
  }
  
  // Get team name from code
  getTeamName(code) {
    const team = NFL_TEAMS.find(t => t.code === code);
    return team ? team.name : code;
  }
  
  // Get team colors
  getTeamColors(code) {
    const team = NFL_TEAMS.find(t => t.code === code);
    return team ? team.colors : { primary: '#666', secondary: '#999' };
  }
  
  // Start the draft
  startDraft() {
    if (!this.isCommissioner()) return false;
    if (this.currentRoom.status !== 'waiting') return false;
    
    this.currentRoom.status = 'active';
    this.currentRoom.lastActivity = Utils.getTimestamp();
    this.storage.saveRoom(this.currentRoom.id, this.currentRoom);
    
    this.startTimer();
    this.addSystemMessage('Draft has started!');
    
    // Check if AI has first pick
    const firstController = [...this.currentRoom.users, ...this.currentRoom.aiTeams]
      .find(p => p.team === this.currentRoom.currentPick.team);
    if (firstController && firstController.role === 'ai') {
      this.scheduleAiPick();
    }
    
    return true;
  }
  
  // Pause the draft
  pauseDraft() {
    if (!this.isCommissioner()) return false;
    
    this.currentRoom.status = this.currentRoom.status === 'active' ? 'paused' : 'active';
    this.currentRoom.lastActivity = Utils.getTimestamp();
    this.storage.saveRoom(this.currentRoom.id, this.currentRoom);
    
    if (this.currentRoom.status === 'paused') {
      this.stopTimer();
      this.addSystemMessage('Draft has been paused');
    } else {
      this.startTimer();
      this.addSystemMessage('Draft has resumed');
    }
    
    return true;
  }
  
  // Undo last pick
  undoLastPick() {
    if (!this.isCommissioner()) return false;
    if (this.currentRoom.picks.length === 0) return false;
    
    const lastPick = this.currentRoom.picks.pop();
    
    // Return player to available
    this.currentRoom.availablePlayers.push(lastPick.player);
    this.currentRoom.availablePlayers.sort((a, b) => (a.rank || 100) - (b.rank || 100));
    
    // Go back to that pick
    this.currentRoom.currentPick = {
      round: lastPick.round,
      pick: lastPick.pick,
      overall: lastPick.overall,
      team: lastPick.team,
      userId: lastPick.userId
    };
    
    this.currentRoom.lastActivity = Utils.getTimestamp();
    this.storage.saveRoom(this.currentRoom.id, this.currentRoom);
    
    this.addSystemMessage(`Last pick undone - ${lastPick.player.name} returned to available`);
    
    return true;
  }
  
  // Show notification (to be overridden by UI)
  showNotification(message, type = 'info') {
    // Override in UI layer
  }
  
  // Show pick notification banner
  showPickNotification(teamCode, player) {
    const team = NFL_TEAMS.find(t => t.code === teamCode);
    
    // Remove existing notification
    const existing = document.querySelector('.draft-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'draft-notification';
    notification.innerHTML = `
      <h3>${team?.name || teamCode} Selects</h3>
      <div class="team-name">${player.name}</div>
      <div class="player-name">${player.position} | ${player.school || 'Unknown'}</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
  }
  
  // Play sound (to be overridden by UI)
  playSound(soundType) {
    if (!this.soundEnabled) return;
    // Override in UI layer
  }
  
  // Toggle sound
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem(CONFIG.STORAGE_PREFIX + 'sound_enabled', this.soundEnabled);
    return this.soundEnabled;
  }
  
  // Load sound preference
  loadSoundPreference() {
    const saved = localStorage.getItem(CONFIG.STORAGE_PREFIX + 'sound_enabled');
    this.soundEnabled = saved !== null ? JSON.parse(saved) : true;
    return this.soundEnabled;
  }
  
  // Calculate draft grades
  calculateGrades() {
    if (!this.currentRoom || this.currentRoom.picks.length === 0) return [];
    
    const teamGrades = {};
    
    this.currentRoom.picks.forEach(pick => {
      if (!teamGrades[pick.team]) {
        teamGrades[pick.team] = { picks: [], totalValue: 0 };
      }
      
      // Calculate pick value (pick number vs player rank)
      const expectedRank = pick.overall;
      const actualRank = pick.player.rank || 50;
      const value = (expectedRank - actualRank) + 50; // Base 50, +/- based on value
      
      teamGrades[pick.team].picks.push({
        ...pick,
        value: Math.max(0, Math.min(100, value))
      });
      teamGrades[pick.team].totalValue += value;
    });
    
    // Calculate letter grades
    const results = Object.entries(teamGrades).map(([team, data]) => {
      const avgValue = data.totalValue / data.picks.length;
      let grade;
      if (avgValue >= 70) grade = 'A';
      else if (avgValue >= 60) grade = 'B';
      else if (avgValue >= 50) grade = 'C';
      else if (avgValue >= 40) grade = 'D';
      else grade = 'F';
      
      // Add +/-
      const remainder = avgValue % 10;
      if (remainder >= 7 && grade !== 'A') grade += '+';
      else if (remainder <= 2 && grade !== 'F') grade += '-';
      
      return {
        team,
        grade,
        avgValue,
        picks: data.picks
      };
    });
    
    // Sort by grade value
    return results.sort((a, b) => b.avgValue - a.avgValue);
  }
  
  // Get best value picks
  getBestValuePicks(limit = 5) {
    if (!this.currentRoom || this.currentRoom.picks.length === 0) return [];
    
    const valuePicks = this.currentRoom.picks.map(pick => {
      const expectedRank = pick.overall;
      const actualRank = pick.player.rank || 50;
      const value = actualRank - expectedRank;
      
      return {
        ...pick,
        value,
        adp: actualRank
      };
    });
    
    return valuePicks
      .filter(p => p.value > 0)
      .sort((a, b) => b.value - a.value)
      .slice(0, limit);
  }
}
// ==========================================
// UI CONTROLLER - Connects DraftRoomManager to DOM
// ==========================================
class DraftUIController {
  constructor(manager) {
    this.manager = manager;
    this.currentView = 'lobby';
    this.setupEventListeners();
    this.setupManagerCallbacks();
  }
  
  // Setup event listeners
  setupEventListeners() {
    // Chat input
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          LiveDraftApp.sendChatMessage();
        }
      });
    }
    
    // Player search
    const playerSearch = document.getElementById('playerSearch');
    if (playerSearch) {
      playerSearch.addEventListener('input', Utils.debounce(() => {
        this.filterPlayers();
      }, 300));
    }
    
    // Draft type buttons
    document.querySelectorAll('.type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    
    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const parent = btn.parentElement;
        parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    
    // Close emoji picker when clicking outside
    document.addEventListener('click', (e) => {
      const emojiPicker = document.getElementById('emojiPicker');
      const emojiBtn = document.querySelector('.btn-emoji');
      if (emojiPicker && !emojiPicker.contains(e.target) && !emojiBtn?.contains(e.target)) {
        emojiPicker.classList.remove('active');
      }
    });
  }
  
  // Setup manager callbacks
  setupManagerCallbacks() {
    this.manager.onRoomUpdate = (room) => {
      this.updateDraftRoomUI(room);
    };
    
    this.manager.onTimerUpdate = (seconds) => {
      this.updateTimerDisplay(seconds);
    };
    
    this.manager.showNotification = (message, type) => {
      this.showToast(message, type);
    };
    
    this.manager.playSound = (soundType) => {
      this.playSoundEffect(soundType);
    };
  }
  
  // Show toast notification
  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
      success: 'check-circle',
      error: 'exclamation-circle',
      info: 'info-circle',
      warning: 'exclamation-triangle'
    };
    
    toast.innerHTML = `
      <i class="fas fa-${icons[type] || icons.info}"></i>
      <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 4000);
  }
  
  // Play sound effect
  playSoundEffect(soundType) {
    // Create audio context for simple beeps
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      switch (soundType) {
        case 'yourTurn':
          osc.frequency.value = 800;
          gain.gain.value = 0.3;
          osc.start();
          osc.stop(ctx.currentTime + 0.2);
          setTimeout(() => {
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.frequency.value = 1000;
            gain2.gain.value = 0.3;
            osc2.start();
            osc2.stop(ctx.currentTime + 0.2);
          }, 250);
          break;
        case 'pickMade':
          osc.frequency.value = 600;
          gain.gain.value = 0.2;
          osc.start();
          osc.stop(ctx.currentTime + 0.1);
          break;
      }
    } catch (e) {
      // Audio not supported
    }
  }
  
  // Update lobby UI
  updateLobbyUI() {
    const draftsList = document.getElementById('draftsList');
    if (!draftsList) return;
    
    const rooms = this.manager.storage.getActiveRooms();
    
    if (rooms.length === 0) {
      draftsList.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-search"></i>
          <p>No active drafts found</p>
          <span>Create one to get started!</span>
        </div>
      `;
      return;
    }
    
    draftsList.innerHTML = rooms.map(room => {
      const totalParticipants = room.users.length + room.aiTeams.length;
      const isFull = totalParticipants >= room.settings.teams;
      const statusClass = room.status === 'active' ? 'active' : 
                         isFull ? 'full' : 'waiting';
      
      return `
        <div class="draft-room-card">
          <div class="draft-room-info">
            <h4>
              <span class="status-badge ${statusClass}"></span>
              Draft Room #${room.id}
            </h4>
            <div class="draft-room-meta">
              Rounds: ${room.settings.rounds} | 
              ${totalParticipants}/${room.settings.teams} joined | 
              ${room.settings.timer > 0 ? room.settings.timer + 's timer' : 'No timer'}
            </div>
            <div class="draft-room-host">
              Host: ${room.users.find(u => u.role === 'commissioner')?.username || 'Unknown'}
            </div>
          </div>
          <div class="draft-room-actions">
            ${!isFull ? `
              <button class="btn-join" onclick="LiveDraftApp.joinDraft('${room.id}')">
                Join
              </button>
            ` : `
              <button class="btn-spectate" onclick="LiveDraftApp.spectateDraft('${room.id}')">
                Spectate
              </button>
            `}
          </div>
        </div>
      `;
    }).join('');
  }
  
  // Update draft room UI
  updateDraftRoomUI(room) {
    if (this.currentView !== 'draft') return;
    
    // Update header
    document.getElementById('draftRoomTitle').textContent = `Draft Room #${room.id}`;
    
    const statusText = {
      waiting: 'Waiting to start...',
      active: 'Draft in progress',
      paused: 'Draft paused',
      completed: 'Draft complete!'
    };
    document.getElementById('draftStatus').textContent = statusText[room.status] || room.status;
    
    // Update current pick info
    if (room.currentPick) {
      const team = NFL_TEAMS.find(t => t.code === room.currentPick.team);
      document.getElementById('onTheClockTeam').textContent = team ? team.code : room.currentPick.team;
      
      const controller = [...room.users, ...room.aiTeams]
        .find(u => u.id === room.currentPick.userId);
      document.getElementById('onTheClockUser').textContent = controller ? controller.username : 'AI';
      
      document.getElementById('currentPickIndicator').textContent = 
        `Round ${room.currentPick.round}, Pick ${room.currentPick.pick}`;
    }
    
    // Show commissioner controls
    const isCommissioner = this.manager.isCommissioner();
    document.getElementById('commissionerBtn').style.display = isCommissioner ? 'flex' : 'none';
    
    // Update draft board
    this.updateDraftBoard(room);
    
    // Update chat
    this.updateChat(room.chat);
    
    // Update available players
    this.updateAvailablePlayers(room.availablePlayers);
    
    // Update my team panel
    this.updateMyTeamPanel(room);
    
    // Check if draft completed
    if (room.status === 'completed') {
      this.showPostDraftView();
    }
  }
  
  // Update draft board
  updateDraftBoard(room) {
    const board = document.getElementById('draftBoard');
    if (!board) return;
    
    const currentOverall = room.currentPick ? room.currentPick.overall : 999;
    
    board.innerHTML = room.draftOrder.map((pick, index) => {
      const isCurrent = pick.overall === currentOverall && room.status === 'active';
      const completed = pick.overall < currentOverall || room.status === 'completed';
      const pickData = room.picks.find(p => p.overall === pick.overall);
      const team = NFL_TEAMS.find(t => t.code === pick.team);
      
      let playerInfo = '';
      if (pickData) {
        playerInfo = `
          <div class="player-name">${pickData.player.name}</div>
          <div class="player-meta">${pickData.player.position} | ${pickData.player.school}</div>
        `;
      } else if (isCurrent) {
        playerInfo = '<div class="pick-status">ON THE CLOCK</div>';
      }
      
      return `
        <div class="draft-pick ${isCurrent ? 'current' : ''} ${completed ? 'completed' : ''}">
          <div class="pick-number">${pick.overall}</div>
          <div class="team-logo" style="background: ${team?.colors?.primary || '#666'}; color: ${team?.colors?.secondary || '#fff'}">
            ${pick.team}
          </div>
          <div class="pick-info">
            ${playerInfo}
          </div>
        </div>
      `;
    }).join('');
    
    // Scroll to current pick
    const currentElement = board.querySelector('.current');
    if (currentElement) {
      currentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  
  // Update chat
  updateChat(messages) {
    const chatContainer = document.getElementById('chatMessages');
    if (!chatContainer) return;
    
    // Only update if changed
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage) {
      chatContainer.innerHTML = '';
      return;
    }
    
    const lastRendered = chatContainer.querySelector('.chat-message:last-child');
    const lastRenderedId = lastRendered?.dataset?.messageId;
    
    if (lastRenderedId === lastMessage.id) return;
    
    chatContainer.innerHTML = messages.map(msg => {
      if (msg.system) {
        return `
          <div class="chat-message system" data-message-id="${msg.id}">
            <div class="message-content">${Utils.escapeHtml(msg.message)}</div>
          </div>
        `;
      }
      
      const isMention = msg.message.includes(`@${this.manager.currentUser.username}`);
      const messageText = Utils.parseMentions(Utils.escapeHtml(msg.message));
      const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      return `
        <div class="chat-message ${isMention ? 'mention' : ''}" data-message-id="${msg.id}">
          <div class="avatar">${msg.username.charAt(0).toUpperCase()}</div>
          <div class="message-content">
            <div class="message-header">
              <span class="username">${Utils.escapeHtml(msg.username)}</span>
              <span class="timestamp">${time}</span>
            </div>
            <div class="message-text">${messageText}</div>
          </div>
        </div>
      `;
    }).join('');
    
    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Update user count
    const onlineCount = new Set(messages.map(m => m.userId)).size;
    document.getElementById('chatUserCount').textContent = `${onlineCount} users`;
  }
  
  // Update available players list
  updateAvailablePlayers(players) {
    const container = document.getElementById('availablePlayersList');
    if (!container) return;
    
    // Store for filtering
    this.allPlayers = players;
    
    this.filterPlayers();
  }
  
  // Filter players based on search and position
  filterPlayers() {
    const container = document.getElementById('availablePlayersList');
    if (!container || !this.allPlayers) return;
    
    const searchTerm = document.getElementById('playerSearch')?.value?.toLowerCase() || '';
    const positionFilter = document.getElementById('positionFilter')?.value || 'all';
    
    const filtered = this.allPlayers.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm) ||
                           player.school?.toLowerCase().includes(searchTerm);
      const matchesPosition = positionFilter === 'all' || player.position === positionFilter;
      return matchesSearch && matchesPosition;
    });
    
    container.innerHTML = filtered.slice(0, 50).map(player => `
      <div class="player-card">
        <div class="rank">${player.rank || '-'}</div>
        <div class="player-info">
          <div class="name">${player.name}</div>
          <div class="meta">${player.position} | ${player.school || 'Unknown'}</div>
        </div>
        <div class="actions">
          <button class="btn-queue-player" onclick="LiveDraftApp.addToQueue('${player.id}')" title="Add to Queue">
            <i class="fas fa-plus"></i>
          </button>
          ${this.isUserTurn() ? `
            <button class="btn-draft-player" onclick="LiveDraftApp.draftPlayer('${player.id}')">
              DRAFT
            </button>
          ` : ''}
        </div>
      </div>
    `).join('');
  }
  
  // Update queue display
  updateQueueDisplay() {
    const queueContainer = document.getElementById('draftQueue');
    if (!queueContainer) return;
    
    if (this.manager.draftQueue.length === 0) {
      queueContainer.innerHTML = '<div class="empty-queue">Add players to your queue for auto-draft</div>';
      return;
    }
    
    queueContainer.innerHTML = this.manager.draftQueue.map((playerId, index) => {
      const player = this.manager.currentRoom?.availablePlayers?.find(p => p.id === playerId);
      if (!player) return '';
      
      return `
        <div class="queue-item">
          <span class="rank">${index + 1}</span>
          <span class="name">${player.name}</span>
          <span class="position">${player.position}</span>
          <button class="remove" onclick="LiveDraftApp.removeFromQueue('${player.id}')">
            <i class="fas fa-times"></i>
          </button>
        </div>
      `;
    }).join('');
  }
  
  // Update my team panel
  updateMyTeamPanel(room) {
    const myPicks = room.picks.filter(p => {
      const controller = [...room.users, ...room.aiTeams].find(u => u.id === p.userId);
      return controller && controller.id === this.manager.currentUser.id;
    });
    
    const container = document.getElementById('myTeamPicks');
    if (!container) return;
    
    if (myPicks.length === 0) {
      container.innerHTML = '<div style="padding: 1rem; color: var(--text-muted);">No picks yet</div>';
      return;
    }
    
    container.innerHTML = myPicks.map(pick => `
      <div class="my-pick">
        <div class="pick-label">Rd ${pick.round}, Pick ${pick.pick}</div>
        <div class="player-name">${pick.player.name}</div>
        <div class="player-position">${pick.player.position} | ${pick.player.school || 'Unknown'}</div>
      </div>
    `).join('');
  }
  
  // Update timer display
  updateTimerDisplay(seconds) {
    const timerEl = document.getElementById('timerDisplay');
    const timerContainer = document.querySelector('.timer');
    
    if (!timerEl) return;
    
    timerEl.textContent = Utils.formatTime(seconds);
    
    // Update visual state
    timerContainer.classList.remove('warning', 'danger');
    if (seconds <= 10) {
      timerContainer.classList.add('danger');
    } else if (seconds <= 20) {
      timerContainer.classList.add('warning');
    }
  }
  
  // Check if it's user's turn
  isUserTurn() {
    if (!this.manager.currentRoom || !this.manager.currentRoom.currentPick) return false;
    return this.manager.currentRoom.currentPick.userId === this.manager.currentUser.id &&
           this.manager.currentRoom.status === 'active';
  }
  
  // Switch views
  showView(viewName) {
    this.currentView = viewName;
    
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewName + 'View')?.classList.add('active');
    
    // Show/hide app container
    const appContainer = document.getElementById('appContainer');
    if (appContainer) {
      appContainer.style.display = viewName === 'userSetup' ? 'none' : 'block';
    }
  }
  
  // Show post-draft view
  showPostDraftView() {
    if (!this.manager.currentRoom) return;
    
    const grades = this.manager.calculateGrades();
    const bestValues = this.manager.getBestValuePicks();
    
    // Final standings
    const standingsEl = document.getElementById('finalStandings');
    if (standingsEl) {
      standingsEl.innerHTML = grades.slice(0, 5).map((g, index) => {
        const team = NFL_TEAMS.find(t => t.code === g.team);
        const user = [...this.manager.currentRoom.users, ...this.manager.currentRoom.aiTeams]
          .find(u => u.team === g.team);
        
        return `
          <div class="standing-item">
            <div class="rank">${index + 1}</div>
            <div class="user-info">
              <div class="username">${user?.username || 'AI'}</div>
              <div class="team-name">${team?.name || g.team}</div>
            </div>
            <div class="grade">${g.grade}</div>
          </div>
        `;
      }).join('');
    }
    
    // Best value picks
    const valueEl = document.getElementById('bestValuePicks');
    if (valueEl) {
      valueEl.innerHTML = bestValues.map(pick => `
        <div class="value-pick-item">
          <span class="pick-number">${pick.overall}</span>
          <div class="pick-details">
            <div class="player-name">${pick.player.name}</div>
            <div class="value-diff">+${pick.value} spots value</div>
          </div>
        </div>
      `).join('');
    }
    
    // Draft stats
    const statsEl = document.getElementById('draftStats');
    if (statsEl) {
      const totalPicks = this.manager.currentRoom.picks.length;
      const byPosition = {};
      this.manager.currentRoom.picks.forEach(p => {
        byPosition[p.player.position] = (byPosition[p.player.position] || 0) + 1;
      });
      
      statsEl.innerHTML = `
        <div class="stat-box">
          <div class="value">${totalPicks}</div>
          <div class="label">Total Picks</div>
        </div>
        <div class="stat-box">
          <div class="value">${Object.keys(byPosition).length}</div>
          <div class="label">Positions Drafted</div>
        </div>
        <div class="stat-box">
          <div class="value">${this.manager.currentRoom.users.length}</div>
          <div class="label">Human Drafters</div>
        </div>
        <div class="stat-box">
          <div class="value">${this.manager.currentRoom.aiTeams.length}</div>
          <div class="label">AI Teams</div>
        </div>
      `;
    }
    
    document.getElementById('postDraftRoomName').textContent = `Draft Room #${this.manager.currentRoom.id}`;
    this.showView('postDraft');
  }
  
  // Initialize team select dropdown
  initTeamSelect() {
    const select = document.getElementById('teamSelect');
    if (!select) return;
    
    // Keep the "Random" option
    select.innerHTML = '<option value="">Random Team</option>';
    
    NFL_TEAMS.forEach(team => {
      const option = document.createElement('option');
      option.value = team.code;
      option.textContent = `${team.city} ${team.name}`;
      select.appendChild(option);
    });
  }
}

// ==========================================
// MAIN APPLICATION - Global API
// ==========================================
const LiveDraftApp = {
  manager: null,
  ui: null,
  
  // Initialize
  init() {
    this.manager = new DraftRoomManager();
    this.ui = new DraftUIController(this.manager);
    
    // Try to load existing user
    const existingUser = this.manager.loadUser();
    if (existingUser) {
      this.enterLobby();
    }
    
    // Setup periodic cleanup
    setInterval(() => {
      this.manager.storage.cleanup();
    }, 60000); // Clean up every minute
    
    console.log('🏈 Live Draft System initialized');
  },
  
  // Enter lobby after setting username
  enterLobby() {
    const usernameInput = document.getElementById('usernameInput');
    const username = usernameInput?.value?.trim();
    
    if (!username) {
      if (!this.manager.currentUser) {
        alert('Please enter a username');
        return;
      }
    } else {
      this.manager.setUser(username);
    }
    
    // Update UI
    document.getElementById('currentUsername').textContent = this.manager.currentUser.username;
    document.getElementById('currentUserAvatar').textContent = this.manager.currentUser.username.charAt(0).toUpperCase();
    
    // Close modal and show lobby
    document.getElementById('userSetupModal').classList.remove('active');
    this.ui.showView('lobby');
    this.ui.initTeamSelect();
    this.ui.updateLobbyUI();
    
    // Update online count simulation
    this.updateOnlineCount();
  },
  
  // Update online count (simulated)
  updateOnlineCount() {
    const baseCount = 8;
    const variance = Math.floor(Math.random() * 5);
    document.getElementById('onlineCount').textContent = `${baseCount + variance} online`;
  },
  
  // Create a new draft
  createDraft() {
    const typeBtn = document.querySelector('.type-btn.active');
    const roundsBtn = document.querySelector('[data-rounds].active');
    const timerBtn = document.querySelector('[data-timer].active');
    const teamsBtn = document.querySelector('[data-teams].active');
    const teamSelect = document.getElementById('teamSelect');
    
    const settings = {
      type: typeBtn?.dataset?.type || 'public',
      rounds: parseInt(roundsBtn?.dataset?.rounds) || 3,
      timer: parseInt(timerBtn?.dataset?.timer) || 60,
      teams: parseInt(teamsBtn?.dataset?.teams) || 32,
      userTeam: teamSelect?.value || null
    };
    
    const room = this.manager.createDraft(settings);
    this.enterDraftRoom(room.id);
    
    this.ui.showToast('Draft room created!', 'success');
  },
  
  // Join a draft room
  joinDraft(roomId) {
    const room = this.manager.joinRoom(roomId);
    if (room) {
      this.enterDraftRoom(roomId);
      this.ui.showToast(`Joined Draft Room #${roomId}`, 'success');
    } else {
      this.ui.showToast('Could not join draft room', 'error');
    }
  },
  
  // Spectate a draft room
  spectateDraft(roomId) {
    const room = this.manager.joinRoom(roomId, true);
    if (room) {
      this.enterDraftRoom(roomId);
      this.ui.showToast(`Spectating Draft Room #${roomId}`, 'info');
    }
  },
  
  // Enter draft room
  enterDraftRoom(roomId) {
    this.manager.loadQueue();
    this.ui.updateQueueDisplay();
    this.ui.showView('draft');
    this.ui.updateDraftRoomUI(this.manager.currentRoom);
    this.manager.loadSoundPreference();
  },
  
  // Leave draft room
  leaveDraft() {
    this.manager.leaveRoom();
    this.ui.showView('lobby');
    this.ui.updateLobbyUI();
  },
  
  // Refresh drafts list
  refreshDrafts() {
    this.ui.updateLobbyUI();
    this.ui.showToast('Draft list refreshed', 'info');
  },
  
  // Send chat message
  sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input?.value?.trim();
    
    if (!message) return;
    
    this.manager.sendChat(message);
    input.value = '';
  },
  
  // Toggle emoji picker
  toggleEmojiPicker() {
    const picker = document.getElementById('emojiPicker');
    picker?.classList.toggle('active');
  },
  
  // Insert emoji
  insertEmoji(emoji) {
    const input = document.getElementById('chatInput');
    if (input) {
      input.value += emoji;
      input.focus();
    }
    document.getElementById('emojiPicker')?.classList.remove('active');
  },
  
  // Draft a player
  draftPlayer(playerId) {
    const player = this.manager.currentRoom?.availablePlayers?.find(p => p.id === playerId);
    if (!player) return;
    
    if (this.manager.makePick(player)) {
      this.ui.showToast(`Selected ${player.name}`, 'success');
      this.ui.updateQueueDisplay();
    }
  },
  
  // Add player to queue
  addToQueue(playerId) {
    if (this.manager.addToQueue(playerId)) {
      this.ui.updateQueueDisplay();
      this.ui.showToast('Added to queue', 'success');
    } else {
      this.ui.showToast('Already in queue', 'warning');
    }
  },
  
  // Remove player from queue
  removeFromQueue(playerId) {
    this.manager.removeFromQueue(playerId);
    this.ui.updateQueueDisplay();
  },
  
  // Filter players
  filterPlayers() {
    this.ui.filterPlayers();
  },
  
  // Toggle my team panel
  toggleMyTeam() {
    const content = document.getElementById('myTeamContent');
    const toggle = document.getElementById('myTeamToggle');
    
    content?.classList.toggle('open');
    if (toggle) {
      toggle.className = content?.classList?.contains('open') ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
    }
  },
  
  // Toggle commissioner panel
  toggleCommissionerPanel() {
    const modal = document.getElementById('commissionerModal');
    modal?.classList.toggle('active');
    
    // Update timer display in modal
    if (this.manager.currentRoom) {
      document.getElementById('commissionerTimerDisplay').textContent = 
        `${this.manager.currentRoom.settings.timer}s`;
    }
  },
  
  // Commissioner: Start draft
  startDraft() {
    if (this.manager.startDraft()) {
      this.ui.showToast('Draft started!', 'success');
      document.getElementById('commissionerModal')?.classList.remove('active');
    }
  },
  
  // Commissioner: Pause draft
  pauseDraft() {
    if (this.manager.pauseDraft()) {
      const status = this.manager.currentRoom.status;
      this.ui.showToast(status === 'paused' ? 'Draft paused' : 'Draft resumed', 'info');
    }
  },
  
  // Commissioner: Reset draft
  resetDraft() {
    if (!confirm('Are you sure you want to reset the draft? All picks will be cleared.')) return;
    
    if (this.manager.currentRoom) {
      this.manager.currentRoom.status = 'waiting';
      this.manager.currentRoom.picks = [];
      this.manager.currentRoom.currentPick = this.manager.currentRoom.draftOrder[0];
      this.manager.currentRoom.availablePlayers = this.manager.getAvailablePlayers();
      this.manager.storage.saveRoom(this.manager.currentRoom.id, this.manager.currentRoom);
      this.ui.showToast('Draft reset', 'warning');
    }
  },
  
  // Commissioner: Undo last pick
  undoLastPick() {
    if (this.manager.undoLastPick()) {
      this.ui.showToast('Last pick undone', 'info');
    }
  },
  
  // Commissioner: Skip pick
  skipPick() {
    if (this.manager.currentRoom) {
      this.manager.handleTimeout();
      this.ui.showToast('Pick skipped', 'info');
    }
  },
  
  // Commissioner: Adjust timer
  adjustTimer(delta) {
    if (this.manager.currentRoom) {
      const newTimer = Math.max(10, Math.min(300, this.manager.currentRoom.settings.timer + delta));
      this.manager.currentRoom.settings.timer = newTimer;
      this.manager.storage.saveRoom(this.manager.currentRoom.id, this.manager.currentRoom);
      document.getElementById('commissionerTimerDisplay').textContent = `${newTimer}s`;
    }
  },
  
  // Toggle sound
  toggleSound() {
    const enabled = this.manager.toggleSound();
    const icon = document.getElementById('soundIcon');
    if (icon) {
      icon.className = enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    }
    this.ui.showToast(enabled ? 'Sound enabled' : 'Sound muted', 'info');
  },
  
  // Share draft
  shareDraft() {
    if (!this.manager.currentRoom) return;
    
    const url = `${window.location.origin}${window.location.pathname}?room=${this.manager.currentRoom.id}`;
    navigator.clipboard.writeText(url).then(() => {
      this.ui.showToast('Draft link copied to clipboard!', 'success');
    });
  },
  
  // Post-draft actions
  viewFullResults() {
    this.ui.showToast('Full results view coming soon!', 'info');
  },
  
  exportDraft() {
    if (!this.manager.currentRoom) return;
    
    const data = {
      room: this.manager.currentRoom.id,
      picks: this.manager.currentRoom.picks,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `draft-${this.manager.currentRoom.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    this.ui.showToast('Draft exported!', 'success');
  },
  
  rematch() {
    if (!this.manager.currentRoom) return;
    
    // Create new room with same settings
    const settings = this.manager.currentRoom.settings;
    const newRoom = this.manager.createDraft(settings);
    
    this.manager.leaveRoom();
    this.enterDraftRoom(newRoom.id);
    
    this.ui.showToast('Rematch started!', 'success');
  },
  
  returnToLobby() {
    this.manager.leaveRoom();
    this.ui.showView('lobby');
    this.ui.updateLobbyUI();
  }
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  LiveDraftApp.init();
  
  // Check for room ID in URL
  const params = new URLSearchParams(window.location.search);
  const roomId = params.get('room');
  if (roomId) {
    // Auto-join if username exists
    setTimeout(() => {
      if (LiveDraftApp.manager.currentUser) {
        LiveDraftApp.joinDraft(roomId);
      }
    }, 500);
  }
});

// Make available globally for inline onclick handlers
window.LiveDraftApp = LiveDraftApp;
