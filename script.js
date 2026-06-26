// ========================================
// ===== الإعدادات الأساسية =====
// ========================================

const RANKS = [
    "Cadet", "Solo Cadet", "Officer", "Officer II", "Officer III",
    "Senior Officer", "Sergeant", "First Sergeant", "Staff Sergeant",
    "Lieutenant", "First Lieutenant"
];

// ========================================
// ===== نظام الصلاحيات والرموز =====
// ========================================

const FULL_ACCESS_CODES = ["crimson25533", "crimson24243", "crimson44343"];
const CMZ_CODES = ["cmz84556", "cmz84776"];

const CODE_USERS = {
    "crimson25533": { name: "Roy Mark", id: "C-5" },
    "crimson24243": { name: "Yahya Al-Shahrani", id: "U-3" },
    "crimson44343": { name: "Marcus Foster", id: "U-0" },
    "cmz84556": { name: "Sab Haitham", id: "C-8" },
    "cmz84776": { name: "Tom Cross", id: "U-11" }
};

// ========================================
// ===== جميع أسماء العساكر =====
// ========================================

const ALL_SOLDIERS = [
    { name: "Marcus Foster", rank: "Staff Sergeant" },
    { name: "wesam aldosari", rank: "Staff Sergeant" },
    { name: "Abdullah Altamimi", rank: "Staff Sergeant" },
    { name: "Yahya Al-Shahrani", rank: "Staff Sergeant" },
    { name: "Ragnaer Al-Qahtani", rank: "First Sergeant" },
    { name: "Tom Cross", rank: "First Sergeant" },
    { name: "Ahmed Khaled", rank: "First Sergeant" },
    { name: "Patrick Vieira", rank: "First Sergeant" },
    { name: "William Alenzi", rank: "Sergeant" },
    { name: "Mohammed Altamimi", rank: "Sergeant" },
    { name: "Abdullah Bader", rank: "Sergeant" },
    { name: "Hamad Saif", rank: "Sergeant" },
    { name: "Basil Saud", rank: "Sergeant" },
    { name: "Arthur Morgan", rank: "Senior Officer" },
    { name: "Maunijar Bin Kurdios", rank: "Senior Officer" },
    { name: "Bayta Sultan", rank: "Senior Officer" },
    { name: "Sultan Alkhaldi", rank: "Senior Officer" },
    { name: "Albert Ruddy", rank: "Senior Officer" },
    { name: "Alex Raw", rank: "Senior Officer" },
    { name: "Berlin Bn Knjr", rank: "Senior Officer" },
    { name: "Jack Johnson", rank: "Senior Officer" },
    { name: "Abdulrahman Alzuhairi", rank: "Senior Officer" },
    { name: "Khaled ALQahtani", rank: "Senior Officer" },
    { name: "Carlo Amlyano", rank: "Senior Officer" },
    { name: "Merih Demiral", rank: "Senior Officer" },
    { name: "Abdu Altamimi", rank: "Officer III" },
    { name: "Sherlock Holmes", rank: "Officer III" },
    { name: "Ali Algamdi", rank: "Officer III" },
    { name: "Ibrahim Al Shariff", rank: "Officer III" },
    { name: "Saeed Abdullah", rank: "Officer III" },
    { name: "Janah Nayim", rank: "Officer III" },
    { name: "Alshm Almithb", rank: "Officer III" },
    { name: "Wessam Alshammari", rank: "Officer III" },
    { name: "Jax lee", rank: "Officer III" },
    { name: "Saqer Almmri", rank: "Officer III" },
    { name: "Abdulaziz Alkhaldi", rank: "Officer III" },
    { name: "Damien Moretti", rank: "Officer III" },
    { name: "Shaheen Al Otaibi", rank: "Officer III" },
    { name: "Abdullah Al Qahtani", rank: "Officer III" },
    { name: "Aziz saif", rank: "Officer III" },
    { name: "Mohammed Alhot", rank: "Officer II" },
    { name: "Abdullah Al Otaibi", rank: "Officer II" },
    { name: "Michel Snow", rank: "Officer II" },
    { name: "Snoop Alqhafiri", rank: "Officer II" },
    { name: "Muckled Ayed", rank: "Officer II" },
    { name: "Rawaf Al Harbi", rank: "Officer II" },
    { name: "Majed Amjad", rank: "Officer II" },
    { name: "Jabir Mansor", rank: "Officer II" },
    { name: "Jassim Monsor", rank: "Officer II" },
    { name: "Wbran Aljohani", rank: "Officer II" },
    { name: "Mahsen Al Dosari", rank: "Officer" },
    { name: "Fahad Ali", rank: "Officer" },
    { name: "Abdulrahman Saad", rank: "Officer" },
    { name: "Naid Alotibi", rank: "Officer" },
    { name: "Bele Botcher", rank: "Officer" },
    { name: "Nawaf Bin Khalidi", rank: "Officer" },
    { name: "Ali Alshammari", rank: "Officer" },
    { name: "Said Alyakh", rank: "Officer" },
    { name: "Maqwas AlShammari", rank: "Officer" },
    { name: "marcus walker", rank: "Officer" },
    { name: "Leonardo Dicapreo", rank: "Officer" },
    { name: "Jax Zalsmoshen", rank: "Officer" },
    { name: "ReX Even", rank: "Officer" },
    { name: "TURKI ABDULLAH", rank: "Officer" }
];

// ========================================
// ===== بيانات العساكر =====
// ========================================

let soldierStats = JSON.parse(localStorage.getItem('soldierStats')) || {};

// متطلبات الترقيات
const RANK_REQUIREMENTS = {
    'Officer': { points: 250, hours: 15 },
    'Officer II': { points: 400, hours: 15 },
    'Officer III': { points: 600, hours: 20 },
    'Senior Officer': { points: 900, hours: 20 },
    'Sergeant': { points: 1100, hours: 20 },
    'First Sergeant': { points: 1400, hours: 20 }
};

// ========================================
// ===== البيانات العامة =====
// ========================================

let soldiers = JSON.parse(localStorage.getItem('soldiers')) || [];
let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
let evaluations = JSON.parse(localStorage.getItem('evaluations')) || [];
let complaints = JSON.parse(localStorage.getItem('complaints')) || [];
let promotions = JSON.parse(localStorage.getItem('promotions')) || [];
let loginLog = JSON.parse(localStorage.getItem('loginLog')) || [];
let accessCodes = JSON.parse(localStorage.getItem('accessCodes')) || [];
let accessLogs = JSON.parse(localStorage.getItem('accessLogs')) || [];
let currentUser = null;
let currentUserCode = null;
let isFullAccess = false;
let isCmzAccess = false;
let currentLoginMethod = 'password';
let currentComplaintFilter = 'all';

// ========================================
// ===== تهيئة العساكر =====
// ========================================

function initSoldiers() {
    if (soldiers.length === 0) {
        soldiers = ALL_SOLDIERS.map((item, index) => ({
            name: item.name,
            rank: item.rank,
            joinDate: new Date().toLocaleString('ar-SA'),
            id: Date.now() + index
        }));
        localStorage.setItem('soldiers', JSON.stringify(soldiers));
    }
    soldiers.forEach(s => {
        if (!soldierStats[s.name]) {
            soldierStats[s.name] = { points: 0, hours: 0, completed: [] };
        }
    });
    localStorage.setItem('soldierStats', JSON.stringify(soldierStats));
}

// ========================================
// ===== التحقق من اكتمال المتطلبات =====
// ========================================

function checkRankCompletion(soldier) {
    const requirements = RANK_REQUIREMENTS[soldier.rank];
    if (!requirements) return null;
    
    const stats = soldierStats[soldier.name] || { points: 0, hours: 0 };
    const isComplete = stats.points >= requirements.points && stats.hours >= requirements.hours;
    
    return {
        isComplete,
        requiredPoints: requirements.points,
        requiredHours: requirements.hours,
        currentPoints: stats.points,
        currentHours: stats.hours
    };
}

// ========================================
// ===== عرض العساكر =====
// ========================================

function renderSoldiersRankList() {
    const container = document.getElementById('soldiersRankList');
    if (!container) return;

    if (soldiers.length === 0) {
        container.innerHTML = '<div class="listItem" style="border-color:#444;">لا يوجد عساكر</div>';
        return;
    }

    container.innerHTML = soldiers.map(s => {
        const stats = soldierStats[s.name] || { points: 0, hours: 0 };
        const rankCheck = checkRankCompletion(s);
        let statusHTML = '';
        
        if (rankCheck) {
            if (rankCheck.isComplete) {
                statusHTML = `<span class="soldierStatus status-complete">✅ مكتمل</span>`;
            } else {
                statusHTML = `<span class="soldierStatus status-incomplete">⏳ ${rankCheck.currentPoints}/${rankCheck.requiredPoints} نقاط • ${rankCheck.currentHours}/${rankCheck.requiredHours} ساعات</span>`;
            }
        }

        return `
        <div class="soldierRankCard">
            <div class="soldierInfo">
                <span class="soldierName">${s.name}</span>
                <span class="soldierRank">${s.rank}</span>
                ${statusHTML}
            </div>
            <div class="soldierStats">
                <div class="statItem">
                    <i class="fas fa-star"></i>
                    <span class="statLabel">النقاط</span>
                    <input type="number" id="points_${s.id}" value="${stats.points || 0}" min="0" 
                           onchange="updateSoldierStat(${s.id}, 'points', this.value)" ${isFullAccess ? '' : 'disabled'} />
                </div>
                <div class="statItem">
                    <i class="fas fa-clock"></i>
                    <span class="statLabel">الساعات</span>
                    <input type="number" id="hours_${s.id}" value="${stats.hours || 0}" min="0" step="0.5"
                           onchange="updateSoldierStat(${s.id}, 'hours', this.value)" ${isFullAccess ? '' : 'disabled'} />
                </div>
                ${isFullAccess ? `<button class="del" onclick="deleteSoldier(${s.id})">✖</button>` : ''}
            </div>
        </div>
    `}).join('');
}

// ========================================
// ===== تحديث إحصائيات العسكري =====
// ========================================

function updateSoldierStat(id, type, value) {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لتعديل الإحصائيات');
        return;
    }

    const soldier = soldiers.find(s => s.id === id);
    if (!soldier) return;

    if (!soldierStats[soldier.name]) {
        soldierStats[soldier.name] = { points: 0, hours: 0 };
    }

    const numValue = parseFloat(value) || 0;
    soldierStats[soldier.name][type] = numValue;
    localStorage.setItem('soldierStats', JSON.stringify(soldierStats));

    renderSoldiersRankList();
}

// ========================================
// ===== التبويبات =====
// ========================================

function switchTab(tabId) {
    document.querySelectorAll('.tabContent').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tabBtn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tabBtn[data-tab="${tabId}"]`).classList.add('active');
    if (tabId === 'tabSoldiers') renderSoldiersRankList();
}

// ========================================
// ===== اختيار نوع القضية =====
// ========================================

function selectComplaintType(type) {
    document.querySelectorAll('.complaintTypeBtn').forEach(btn => btn.classList.remove('active'));
    if (type === 'citizen') {
        document.querySelector('.complaintTypeBtn:first-child').classList.add('active');
        document.getElementById('citizenComplaintForm').style.display = 'block';
        document.getElementById('militaryComplaintForm').style.display = 'none';
    } else {
        document.querySelector('.complaintTypeBtn:last-child').classList.add('active');
        document.getElementById('citizenComplaintForm').style.display = 'none';
        document.getElementById('militaryComplaintForm').style.display = 'block';
    }
}

// ========================================
// ===== رفع قضية =====
// ========================================

function submitPublicComplaint() {
    const name = document.getElementById('citizenName').value.trim();
    const type = document.getElementById('complaintType').value;
    const desc = document.getElementById('complaintDesc').value.trim();
    const status = document.getElementById('complaintStatus');

    if (!name || !desc) {
        status.className = 'statusMessage error';
        status.innerHTML = '❌ الرجاء ملء الاسم والتفاصيل';
        return;
    }

    complaints.push({
        id: Date.now(),
        name: name,
        type: type,
        desc: desc,
        date: new Date().toLocaleString('ar-SA'),
        status: 'قيد المراجعة',
        claimedBy: null,
        claimedAt: null,
        complaintType: 'citizen',
        isMilitary: false
    });

    localStorage.setItem('complaints', JSON.stringify(complaints));

    document.getElementById('citizenName').value = '';
    document.getElementById('complaintDesc').value = '';

    status.className = 'statusMessage success';
    status.innerHTML = '✅ تم رفع القضية بنجاح! سيتم مراجعتها';

    if (document.getElementById('dashboard').style.display !== 'none') {
        renderComplaints();
        updateStats();
    }
}

function submitMilitaryComplaint() {
    const name = document.getElementById('militaryName').value.trim();
    const type = document.getElementById('militaryComplaintType').value;
    const desc = document.getElementById('militaryComplaintDesc').value.trim();
    const status = document.getElementById('complaintStatus');

    if (!name || !desc) {
        status.className = 'statusMessage error';
        status.innerHTML = '❌ الرجاء ملء الاسم والتفاصيل';
        return;
    }

    complaints.push({
        id: Date.now(),
        name: name,
        type: type,
        desc: desc,
        date: new Date().toLocaleString('ar-SA'),
        status: 'قيد المراجعة',
        claimedBy: null,
        claimedAt: null,
        complaintType: 'military',
        isMilitary: true
    });

    localStorage.setItem('complaints', JSON.stringify(complaints));

    document.getElementById('militaryName').value = '';
    document.getElementById('militaryComplaintDesc').value = '';

    status.className = 'statusMessage success';
    status.innerHTML = '✅ تم رفع القضية العسكرية بنجاح! سيتم مراجعتها';

    if (document.getElementById('dashboard').style.display !== 'none') {
        renderComplaints();
        updateStats();
    }
}

// ========================================
// ===== رموز الدخول =====
// ========================================

function initDefaultCodes() {
    FULL_ACCESS_CODES.forEach(code => {
        if (!accessCodes.find(a => a.code === code)) {
            const userData = CODE_USERS[code];
            accessCodes.push({
                name: userData ? userData.name : code,
                code: code,
                expiry: "دائم",
                created: new Date().toISOString().split('T')[0],
                active: true,
                fullAccess: true,
                isCmz: false,
                id: Date.now() + Math.random() * 1000
            });
        }
    });
    CMZ_CODES.forEach(code => {
        if (!accessCodes.find(a => a.code === code)) {
            const userData = CODE_USERS[code];
            accessCodes.push({
                name: userData ? userData.name : code,
                code: code,
                expiry: "دائم",
                created: new Date().toISOString().split('T')[0],
                active: true,
                fullAccess: false,
                isCmz: true,
                id: Date.now() + Math.random() * 1000
            });
        }
    });
    localStorage.setItem('accessCodes', JSON.stringify(accessCodes));
}

function addAccessCode() {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لإضافة رموز');
        return;
    }

    const name = document.getElementById('accessName').value.trim();
    const code = document.getElementById('accessCode').value.trim().toUpperCase();
    const expiry = document.getElementById('accessExpiry').value;

    if (!name || !code) {
        alert('❌ الرجاء إدخال الاسم والرمز');
        return;
    }
    if (accessCodes.find(a => a.code === code)) {
        alert('❌ هذا الرمز موجود مسبقاً');
        return;
    }

    let expiryDate = expiry === 'permanent' ? 'دائم' : (() => { const d = new Date(); d.setDate(d.getDate() + parseInt(expiry)); return d.toISOString().split('T')[0]; })();

    const isFull = code.startsWith('CRIMSON');
    const isCmz = code.startsWith('CMZ');

    accessCodes.push({
        name, code, expiry: expiryDate,
        created: new Date().toISOString().split('T')[0],
        active: true, fullAccess: isFull, isCmz: isCmz,
        id: Date.now()
    });

    localStorage.setItem('accessCodes', JSON.stringify(accessCodes));
    document.getElementById('accessName').value = '';
    document.getElementById('accessCode').value = '';
    renderAccessCodes();

    alert(`✅ تم إضافة الرمز ${code} للشخص ${name}`);
}

function deleteAccessCode(id) {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لحذف الرموز');
        return;
    }
    const code = accessCodes.find(a => a.id === id);
    if (!code) return;
    if (FULL_ACCESS_CODES.includes(code.code)) {
        alert('❌ لا يمكن حذف رمز crimson الأساسي');
        return;
    }
    if (!confirm(`⚠️ هل تريد فصل ${code.name} نهائياً؟\nالرمز: ${code.code}\nلن يتمكن من الدخول مرة أخرى`)) return;
    
    code.active = false;
    code.banned = true;
    localStorage.setItem('accessCodes', JSON.stringify(accessCodes));
    renderAccessCodes();

    alert(`✅ تم فصل ${code.name} بنجاح`);
}

function renderAccessCodes() {
    const list = document.getElementById('accessList');
    if (!list) return;
    if (!isFullAccess) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">🔒 غير مصرح لك بمشاهدة هذا القسم</div>';
        return;
    }
    if (accessCodes.length === 0) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد رموز</div>';
        return;
    }
    list.innerHTML = accessCodes.map(a => {
        const isFull = FULL_ACCESS_CODES.includes(a.code);
        const isCmz = CMZ_CODES.includes(a.code);
        const isBanned = a.banned === true;
        let typeLabel = '🟡 محدود';
        if (isFull) typeLabel = '🔴 كامل';
        else if (isCmz) typeLabel = '🟡 قضايا فقط';
        if (isBanned) typeLabel = '⛔ مطرود';
        
        return `
        <div class="listItem">
            <div>
                <strong>${a.name}</strong>
                <span style="color:#ffd700;font-weight:700;margin:0 8px;">${a.code}</span>
                ${typeLabel}
                <span class="${a.active && (a.expiry === 'دائم' || a.expiry >= new Date().toISOString().split('T')[0]) ? 'status-active' : 'status-expired'}">
                    ${isBanned ? '🚫 محظور' : a.active && (a.expiry === 'دائم' || a.expiry >= new Date().toISOString().split('T')[0]) ? '✅ نشط' : '⛔ موقف'}
                </span>
                <br><small style="color:#555;">صلاحية: ${a.expiry}</small>
            </div>
            ${!isFull && !isBanned ? `<button class="del" onclick="deleteAccessCode(${a.id})" title="فصل العضو">🚫</button>` : isBanned ? '<span style="color:#ff4444;font-size:12px;">🚫 محظور</span>' : '<span style="color:#555;font-size:12px;">محمي</span>'}
        </div>
    `}).join('');
}

function renderAccessLog() {
    const list = document.getElementById('accessLog');
    if (!list) return;
    if (!isFullAccess) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">🔒 غير مصرح لك بمشاهدة هذا القسم</div>';
        return;
    }
    if (accessLogs.length === 0) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد سجلات</div>';
        return;
    }
    const recent = [...accessLogs].reverse().slice(0, 20);
    list.innerHTML = recent.map(log => `
        <div class="listItem" style="border-color:#ffd700;">
            <span><strong>${log.name}</strong> (${log.code})</span>
            <span style="color:#888;font-size:12px;">${log.time}</span>
        </div>
    `).join('');
}

// ========================================
// ===== طرق الدخول =====
// ========================================

function switchLoginMethod(method) {
    currentLoginMethod = method;
    document.querySelectorAll('.methodBtn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.methodBtn[onclick*="${method}"]`)?.classList.add('active');
    document.getElementById('loginMethodPassword').style.display = method === 'password' ? 'block' : 'none';
    document.getElementById('loginMethodCode').style.display = method === 'code' ? 'block' : 'none';
    document.getElementById('loginError').textContent = '';
}

function adminLogin() {
    const pass = document.getElementById('passwordInput').value;
    const errorEl = document.getElementById('loginError');

    if (pass === "crimson2024") {
        currentUser = "المدير العام";
        currentUserCode = "ADMIN";
        isFullAccess = true;
        isCmzAccess = false;

        document.getElementById('adminLoginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('currentUserDisplay').textContent = `👤 ${currentUser} (🔴 كامل)`;
        addLoginRecord(currentUser, 'دخول', 'ADMIN');
        errorEl.textContent = '';
        loadAll();
        updateUIBasedOnAccess();
        showWelcomeMessage(currentUser);
    } else {
        errorEl.textContent = '❌ كلمة المرور خاطئة';
    }
}

function loginWithCode() {
    const inputCode = document.getElementById('accessCodeInput').value.trim();
    const errorEl = document.getElementById('loginError');

    if (!inputCode) {
        errorEl.textContent = '❌ الرجاء إدخال رمز الدخول';
        return;
    }

    const codeData = accessCodes.find(a => a.code === inputCode);
    if (!codeData) {
        errorEl.textContent = '❌ رمز غير صحيح';
        return;
    }
    
    if (codeData.banned === true) {
        errorEl.textContent = '❌ تم حظر هذا الرمز من الدخول';
        return;
    }
    
    if (!codeData.active) {
        errorEl.textContent = '❌ هذا الرمز موقف';
        return;
    }
    if (codeData.expiry !== 'دائم') {
        const today = new Date().toISOString().split('T')[0];
        if (today > codeData.expiry) {
            errorEl.textContent = '❌ انتهت صلاحية الرمز';
            codeData.active = false;
            localStorage.setItem('accessCodes', JSON.stringify(accessCodes));
            renderAccessCodes();
            return;
        }
    }

    const isFull = FULL_ACCESS_CODES.includes(inputCode) || inputCode.startsWith('crimson');
    const isCmz = CMZ_CODES.includes(inputCode) || inputCode.startsWith('cmz');
    const userData = CODE_USERS[inputCode];
    const displayName = userData ? `${userData.id} | ${userData.name}` : codeData.name;

    currentUser = displayName;
    currentUserCode = inputCode;
    isFullAccess = isFull;
    isCmzAccess = isCmz;

    document.getElementById('adminLoginScreen').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    let accessText = '🟡 محدود (عرض فقط)';
    if (isFull) accessText = '🔴 كامل';
    else if (isCmz) accessText = '🟡 استلام قضايا فقط';

    document.getElementById('currentUserDisplay').textContent = `👤 ${currentUser} (${accessText})`;
    addLoginRecord(currentUser, 'دخول', inputCode);
    errorEl.textContent = '';

    accessLogs.push({
        code: inputCode,
        name: displayName,
        time: new Date().toLocaleString('ar-SA'),
        id: Date.now()
    });
    localStorage.setItem('accessLogs', JSON.stringify(accessLogs));
    renderAccessLog();

    loadAll();
    updateUIBasedOnAccess();
    showWelcomeMessage(currentUser);
}

// ========================================
// ===== رسالة الترحيب (في الموقع فقط) =====
// ========================================

function showWelcomeMessage(name) {
    const overlay = document.getElementById('welcomeOverlay');
    const nameDisplay = document.getElementById('welcomeNameDisplay');

    let cleanName = name;
    if (cleanName.includes('|')) {
        cleanName = cleanName.split('|')[1].trim();
    }
    cleanName = cleanName.replace(/\([^)]*\)/g, '').trim();

    nameDisplay.textContent = cleanName;
    overlay.style.display = 'flex';
}

function closeWelcome() {
    document.getElementById('welcomeOverlay').style.display = 'none';
}

// ========================================
// ===== عرض القضية كاملة =====
// ========================================

function viewComplaint(id) {
    const complaint = complaints.find(c => c.id === id);
    if (!complaint) return;

    const modal = document.getElementById('complaintModal');
    const body = document.getElementById('complaintModalBody');

    const isCitizen = complaint.complaintType === 'citizen' || complaint.isMilitary === false;
    const statusLabel = complaint.claimedBy ? `📥 مستلمة من: ${complaint.claimedBy}` : '📤 قيد المراجعة';
    const dateStr = complaint.date || 'غير محدد';

    body.innerHTML = `
        <div class="detailRow"><span class="detailLabel">👤 الاسم:</span><span class="detailValue">${complaint.name || 'غير محدد'}</span></div>
        <div class="detailRow"><span class="detailLabel">🏷️ النوع:</span><span class="detailValue">${complaint.type || 'غير محدد'}</span></div>
        <div class="detailRow"><span class="detailLabel">📂 التصنيف:</span><span class="detailValue">${isCitizen ? 'مواطن' : 'عسكري'}</span></div>
        <div class="detailRow"><span class="detailLabel">📅 التاريخ:</span><span class="detailValue">${dateStr}</span></div>
        <div class="detailRow"><span class="detailLabel">📌 الحالة:</span><span class="detailValue">${statusLabel}</span></div>
        <div class="complaintFullDesc">
            <strong>📝 التفاصيل الكاملة:</strong><br>
            ${complaint.desc || 'لا توجد تفاصيل'}
        </div>
    `;

    modal.style.display = 'flex';
}

function closeComplaintModal() {
    document.getElementById('complaintModal').style.display = 'none';
}

// ========================================
// ===== الخروج =====
// ========================================

function adminLogout() {
    if (currentUser) {
        addLoginRecord(currentUser, 'خروج', currentUserCode);
    }
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('publicPage').style.display = 'block';
    currentUser = null;
    currentUserCode = null;
    isFullAccess = false;
    isCmzAccess = false;
}

// ========================================
// ===== سجل الدخول =====
// ========================================

function addLoginRecord(username, action, code) {
    const now = new Date();
    const timeStr = now.toLocaleString('ar-SA', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    const dateStr = now.toLocaleDateString('ar-SA');

    let cleanName = username;
    if (cleanName.includes('|')) cleanName = cleanName.split('|')[1].trim();
    cleanName = cleanName.replace(/\([^)]*\)/g, '').trim();

    loginLog.push({
        username: cleanName,
        action: action || 'دخول',
        code: code || '-',
        time: timeStr,
        date: dateStr,
        timestamp: now.getTime()
    });

    if (loginLog.length > 100) loginLog = loginLog.slice(-100);
    localStorage.setItem('loginLog', JSON.stringify(loginLog));
    renderLoginLog();
}

function renderLoginLog() {
    const logContainer = document.getElementById('loginLog');
    if (!logContainer) return;
    if (loginLog.length === 0) {
        logContainer.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد سجلات دخول</div>';
        return;
    }
    const recent = [...loginLog].reverse().slice(0, 20);
    logContainer.innerHTML = recent.map(entry => `
        <div class="logEntry">
            <span><span class="logUser">${entry.username}</span> <span class="logAction">${entry.action}</span></span>
            <span class="logTime">${entry.date} - ${entry.time}</span>
        </div>
    `).join('');
}

// ========================================
// ===== عرض الصفحات =====
// ========================================

function showAdminLogin() {
    document.getElementById('publicPage').style.display = 'none';
    document.getElementById('adminLoginScreen').style.display = 'flex';
}

function showPublicPage() {
    document.getElementById('adminLoginScreen').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('publicPage').style.display = 'block';
    currentUser = null;
    currentUserCode = null;
    isFullAccess = false;
    isCmzAccess = false;
}

// ========================================
// ===== نظام استلام القضايا =====
// ========================================

function claimComplaint(id) {
    if (!isCmzAccess && !isFullAccess) {
        alert('❌ ليس لديك صلاحية لاستلام القضايا');
        return;
    }
    const complaint = complaints.find(c => c.id === id);
    if (!complaint) return;
    if (complaint.claimedBy) {
        alert(`❌ هذه القضية تم استلامها من قبل ${complaint.claimedBy}`);
        return;
    }

    complaint.claimedBy = currentUser;
    complaint.claimedAt = new Date().toLocaleString('ar-SA');
    complaint.status = 'قيد المعالجة';

    localStorage.setItem('complaints', JSON.stringify(complaints));
    renderComplaints();
    updateStats();
    updateClaimedCount();

    alert(`✅ تم استلام القضية بنجاح`);
}

function unclaimComplaint(id) {
    if (!isCmzAccess && !isFullAccess) {
        alert('❌ ليس لديك صلاحية لإلغاء استلام القضايا');
        return;
    }
    const complaint = complaints.find(c => c.id === id);
    if (!complaint) return;
    if (complaint.claimedBy !== currentUser) {
        alert('❌ هذه القضية ليست مستلمة من قبلك');
        return;
    }

    complaint.claimedBy = null;
    complaint.claimedAt = null;
    complaint.status = 'قيد المراجعة';

    localStorage.setItem('complaints', JSON.stringify(complaints));
    renderComplaints();
    updateStats();
    updateClaimedCount();
    alert(`✅ تم إلغاء استلام القضية`);
}

function deleteComplaint(id) {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لحذف قضايا');
        return;
    }
    if (!confirm('حذف القضية؟')) return;
    complaints = complaints.filter(c => c.id !== id);
    localStorage.setItem('complaints', JSON.stringify(complaints));
    renderComplaints();
    updateStats();
    updateClaimedCount();
}

// ========================================
// ===== تصفية وعرض القضايا =====
// ========================================

function filterComplaints(filter) {
    currentComplaintFilter = filter;
    document.querySelectorAll('.filterBtn').forEach(btn => btn.classList.remove('active'));
    const btns = document.querySelectorAll('.filterBtn');
    const filterMap = { 'all': 0, 'citizen': 1, 'military': 2, 'claimed': 3, 'unclaimed': 4 };
    const index = filterMap[filter] || 0;
    if (btns[index]) btns[index].classList.add('active');
    renderComplaints();
}

function renderComplaints() {
    const list = document.getElementById('complaintList');
    if (!list) return;

    let filteredComplaints = complaints;
    if (currentComplaintFilter === 'citizen') filteredComplaints = complaints.filter(c => c.complaintType === 'citizen' || c.isMilitary === false);
    else if (currentComplaintFilter === 'military') filteredComplaints = complaints.filter(c => c.complaintType === 'military' || c.isMilitary === true);
    else if (currentComplaintFilter === 'claimed') filteredComplaints = complaints.filter(c => c.claimedBy);
    else if (currentComplaintFilter === 'unclaimed') filteredComplaints = complaints.filter(c => !c.claimedBy);

    if (!isFullAccess && !isCmzAccess) {
        filteredComplaints = filteredComplaints.filter(c => !c.claimedBy || c.claimedBy === currentUser);
    }

    if (filteredComplaints.length === 0) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد قضايا</div>';
        return;
    }

    list.innerHTML = filteredComplaints.slice().reverse().map(c => {
        const isClaimed = c.claimedBy !== null && c.claimedBy !== undefined;
        const isMine = c.claimedBy === currentUser;
        const canClaim = (isFullAccess || isCmzAccess) && !isClaimed;
        const canUnclaim = (isFullAccess || isCmzAccess) && isMine;
        const isCitizen = c.complaintType === 'citizen' || c.isMilitary === false;

        return `
        <div class="listItem" style="border-color: ${isClaimed ? '#ffd700' : '#8b0000'}; flex-wrap:wrap;">
            <div style="flex:1;min-width:150px;cursor:pointer;" onclick="viewComplaint(${c.id})">
                <strong>${c.name}</strong> (${c.type})
                <span class="complaintBadge ${isCitizen ? 'badge-citizen' : 'badge-military'}">${isCitizen ? 'مواطن' : 'عسكري'}</span>
                <br><small>${c.desc.substring(0, 50)}${c.desc.length > 50 ? '...' : ''}</small>
                <br><small style="color:#555;">${c.date}</small>
                <br>
                <span style="font-size:12px;color:${isClaimed ? '#ffd700' : '#00ff00'};">
                    ${isClaimed ? `📥 مستلمة من: ${c.claimedBy}` : '📤 قيد المراجعة'}
                </span>
                ${isMine ? `<span style="font-size:12px;color:#ff4444;"> (أنت المستلم)</span>` : ''}
            </div>
            <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:5px;">
                <button onclick="viewComplaint(${c.id})" style="background:#1e88e5;color:#fff;padding:4px 12px;font-size:12px;border:none;border-radius:6px;cursor:pointer;">📖 عرض</button>
                ${canClaim ? `<button onclick="claimComplaint(${c.id})" style="background:#00a86b;color:#fff;padding:4px 12px;font-size:12px;border:none;border-radius:6px;cursor:pointer;">📥 استلم</button>` : ''}
                ${canUnclaim ? `<button onclick="unclaimComplaint(${c.id})" style="background:#ff8c00;color:#fff;padding:4px 12px;font-size:12px;border:none;border-radius:6px;cursor:pointer;">↩️ إلغاء</button>` : ''}
                ${isFullAccess ? `<button onclick="deleteComplaint(${c.id})" style="background:#ff0000;color:#fff;padding:4px 12px;font-size:12px;border:none;border-radius:6px;cursor:pointer;">✖</button>` : ''}
            </div>
        </div>
    `}).join('');
}

// ========================================
// ===== إحصائيات القضايا المستلمة =====
// ========================================

function updateClaimedCount() {
    const claimedCounts = {};
    complaints.forEach(c => {
        if (c.claimedBy) {
            if (!claimedCounts[c.claimedBy]) claimedCounts[c.claimedBy] = 0;
            claimedCounts[c.claimedBy]++;
        }
    });

    const statsDiv = document.getElementById('claimedStats');
    if (statsDiv) {
        if (Object.keys(claimedCounts).length === 0) {
            statsDiv.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد قضايا مستلمة</div>';
            return;
        }
        statsDiv.innerHTML = Object.entries(claimedCounts)
            .map(([name, count]) => `<div class="listItem" style="border-color:#ffd700;"><strong>${name}</strong>: ${count} قضية</div>`)
            .join('');
    }
}

// ========================================
// ===== سجل استلام القضايا (بحث) =====
// ========================================

function searchPersonComplaints() {
    const searchName = document.getElementById('searchPersonName').value.trim();
    const resultDiv = document.getElementById('complaintLogResult');

    if (!searchName) {
        resultDiv.innerHTML = '<div class="listItem" style="border-color:#444;">❌ الرجاء إدخال اسم للبحث</div>';
        return;
    }

    const personComplaints = complaints.filter(c => c.claimedBy && c.claimedBy.includes(searchName));

    if (personComplaints.length === 0) {
        resultDiv.innerHTML = `<div class="listItem" style="border-color:#ffd700;">🔍 لا توجد قضايا مستلمة للشخص: ${searchName}</div>`;
        return;
    }

    const total = personComplaints.length;
    resultDiv.innerHTML = `
        <div class="listItem" style="border-color:#00ff00;flex-wrap:wrap;">
            <div style="flex:1;">
                <strong>📊 ${searchName}</strong>
                <span style="color:#ffd700;font-size:18px;font-weight:900;">${total}</span>
                <span style="color:#888;">قضية مستلمة</span>
            </div>
        </div>
        ${personComplaints.map(c => `
            <div class="listItem" style="border-color:#8b0000;font-size:13px;cursor:pointer;" onclick="viewComplaint(${c.id})">
                <span>📋 ${c.type}: ${c.desc.substring(0, 30)}...</span>
                <span style="color:#888;font-size:11px;">${c.date}</span>
            </div>
        `).join('')}
    `;
}

function showAllComplaintLog() {
    const resultDiv = document.getElementById('complaintLogResult');
    const allClaimed = complaints.filter(c => c.claimedBy);

    if (allClaimed.length === 0) {
        resultDiv.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد قضايا مستلمة</div>';
        return;
    }

    const grouped = {};
    allClaimed.forEach(c => {
        if (!grouped[c.claimedBy]) grouped[c.claimedBy] = [];
        grouped[c.claimedBy].push(c);
    });

    let html = '';
    for (const [person, claims] of Object.entries(grouped)) {
        html += `
            <div class="listItem" style="border-color:#ffd700;flex-wrap:wrap;margin-bottom:5px;">
                <div style="flex:1;">
                    <strong>👤 ${person}</strong>
                    <span style="color:#ffd700;font-size:16px;font-weight:900;">${claims.length}</span>
                    <span style="color:#888;">قضية</span>
                </div>
            </div>
            ${claims.map(c => `
                <div class="listItem" style="border-color:#8b0000;font-size:12px;margin-right:20px;cursor:pointer;" onclick="viewComplaint(${c.id})">
                    <span>📋 ${c.type}: ${c.desc.substring(0, 25)}...</span>
                    <span style="color:#888;font-size:10px;">${c.date}</span>
                </div>
            `).join('')}
        `;
    }
    resultDiv.innerHTML = html;
}

// ========================================
// ===== العساكر =====
// ========================================

function addSoldier() {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لإضافة عساكر');
        return;
    }

    const name = document.getElementById('soldierName').value.trim();
    const rank = document.getElementById('soldierRank').value;

    if (!name) {
        alert('❌ الرجاء إدخال اسم العسكري');
        return;
    }
    if (soldiers.find(s => s.name === name)) {
        alert('❌ العسكري ' + name + ' موجود مسبقاً');
        return;
    }

    soldiers.push({
        name, rank,
        joinDate: new Date().toLocaleString('ar-SA'),
        id: Date.now()
    });

    localStorage.setItem('soldiers', JSON.stringify(soldiers));

    if (!soldierStats[name]) {
        soldierStats[name] = { points: 0, hours: 0 };
    }
    localStorage.setItem('soldierStats', JSON.stringify(soldierStats));

    document.getElementById('soldierName').value = '';

    renderSoldiersRankList();
    updateStats();

    alert(`✅ تم إضافة العسكري ${name} بنجاح`);
}

function deleteSoldier(id) {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لحذف عساكر');
        return;
    }
    const s = soldiers.find(s => s.id === id);
    if (!s) return;
    if (!confirm(`❌ هل تريد حذف العسكري ${s.name}؟`)) return;
    
    soldiers = soldiers.filter(s => s.id !== id);
    delete soldierStats[s.name];
    localStorage.setItem('soldiers', JSON.stringify(soldiers));
    localStorage.setItem('soldierStats', JSON.stringify(soldierStats));
    
    renderSoldiersRankList();
    updateStats();
}

// ========================================
// ===== الترقيات =====
// ========================================

function promoteSoldier() {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية للترقيات');
        return;
    }

    const name = document.getElementById('promotionSoldier').value;
    const newRank = document.getElementById('newRank').value;
    const s = soldiers.find(s => s.name === name);

    if (!s) {
        alert('❌ اختر عسكري أولاً');
        return;
    }
    if (s.rank === newRank) {
        alert('❌ نفس الرتبة الحالية');
        return;
    }

    promotions.push({
        soldier: name,
        oldRank: s.rank,
        newRank: newRank,
        date: new Date().toLocaleString('ar-SA')
    });

    localStorage.setItem('promotions', JSON.stringify(promotions));
    s.rank = newRank;
    localStorage.setItem('soldiers', JSON.stringify(soldiers));

    renderPromotions();
    renderSoldiersRankList();

    alert(`✅ تمت ترقية ${name} إلى ${newRank}`);
}

function deletePromotion(index) {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لحذف الترقيات');
        return;
    }
    if (!confirm('هل تريد حذف هذه الترقية؟')) return;
    promotions.splice(index, 1);
    localStorage.setItem('promotions', JSON.stringify(promotions));
    renderPromotions();
}

function renderPromotions() {
    const list = document.getElementById('promotionHistory');
    if (!list) return;
    if (promotions.length === 0) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد ترقيات</div>';
        return;
    }
    list.innerHTML = promotions.slice().reverse().map((p, i) => {
        const realIndex = promotions.length - 1 - i;
        return `
        <div class="listItem" style="border-color:#ffd700;">
            <span><strong>${p.soldier}</strong> ${p.oldRank} → ${p.newRank}<br><small>${p.date}</small></span>
            ${isFullAccess ? `<button class="del" onclick="deletePromotion(${realIndex})">✖</button>` : ''}
        </div>
    `}).join('');
}

// ========================================
// ===== المهام =====
// ========================================

function assignTask() {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لتعيين مهام');
        return;
    }

    const soldier = document.getElementById('taskSoldier').value;
    const desc = document.getElementById('taskDesc').value.trim();

    if (!soldier) {
        alert('❌ اختر عسكري أولاً');
        return;
    }
    if (!desc) {
        alert('❌ اكتب وصف المهمة');
        return;
    }

    if (!tasks[soldier]) tasks[soldier] = [];
    tasks[soldier].push({ desc, date: new Date().toLocaleString('ar-SA') });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('taskDesc').value = '';
    renderTasks();
    updateStats();
}

function deleteTask(soldier, index) {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لحذف مهام');
        return;
    }
    tasks[soldier].splice(index, 1);
    if (!tasks[soldier].length) delete tasks[soldier];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    updateStats();
}

function renderTasks() {
    const soldier = document.getElementById('taskSoldier').value;
    const list = document.getElementById('taskList');
    if (!list) return;
    if (!soldier) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">اختر عسكري أولاً</div>';
        return;
    }
    const ts = tasks[soldier] || [];
    if (ts.length === 0) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد مهام</div>';
        return;
    }
    list.innerHTML = ts.map((t, i) => `
        <div class="listItem">
            <span>📌 ${t.desc}<br><small>${t.date}</small></span>
            ${isFullAccess ? `<button class="del" onclick="deleteTask('${soldier}', ${i})">✖</button>` : '<span style="color:#555;font-size:12px;">🔒</span>'}
        </div>
    `).join('');
}

// ========================================
// ===== التقييم =====
// ========================================

function submitEvaluation() {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لإضافة تقييمات');
        return;
    }

    const soldier = document.getElementById('evalSoldier').value;
    if (!soldier) {
        alert('❌ اختر عسكري أولاً');
        return;
    }

    const hours = parseInt(document.getElementById('hours').value) || 0;
    const reports = parseInt(document.getElementById('reports').value) || 0;
    const dispatch = parseInt(document.getElementById('dispatch').value) || 0;
    const score = parseInt(document.getElementById('score').value) || 0;
    const discipline = parseInt(document.getElementById('discipline').value) || 5;

    const total = hours + (reports * 5) + dispatch + (score * 2) + discipline;
    const week = getWeekNumber();

    evaluations.push({
        soldier, hours, reports, dispatch, score, discipline, total, week,
        date: new Date().toLocaleString('ar-SA')
    });

    localStorage.setItem('evaluations', JSON.stringify(evaluations));
    renderEvaluationLog();
    updateStats();

    alert(`✅ تم تقييم ${soldier}\nالمجموع: ${total} نقطة`);
}

function deleteEvaluation(index) {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لحذف التقييمات');
        return;
    }
    if (!confirm('هل تريد حذف هذا التقييم؟')) return;
    evaluations.splice(index, 1);
    localStorage.setItem('evaluations', JSON.stringify(evaluations));
    renderEvaluationLog();
    updateStats();
}

function renderEvaluationLog() {
    const log = document.getElementById('evaluationLog');
    if (!log) return;
    if (evaluations.length === 0) {
        log.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد تقييمات</div>';
        return;
    }
    log.innerHTML = evaluations.slice().reverse().map((e, i) => {
        const realIndex = evaluations.length - 1 - i;
        return `
        <div class="listItem" style="border-color:#ffd700;">
            <span><strong>${e.soldier}</strong> - ${e.total} نقطة<br><small>الانضباط: ${e.discipline}</small></span>
            ${isFullAccess ? `<button class="del" onclick="deleteEvaluation(${realIndex})">✖</button>` : ''}
        </div>
    `}).join('');
}

// ========================================
// ===== عسكري الأسبوع =====
// ========================================

function calculateWinner() {
    const week = getWeekNumber();
    const weekEvals = evaluations.filter(e => e.week === week);

    if (weekEvals.length === 0) {
        document.getElementById('weeklyWinnerDisplay').innerHTML = '<span>🏆 لا توجد تقييمات هذا الأسبوع</span>';
        return;
    }

    const grouped = {};
    weekEvals.forEach(e => {
        if (!grouped[e.soldier]) grouped[e.soldier] = 0;
        grouped[e.soldier] += e.total;
    });

    let winner = null, max = 0;
    for (const [name, score] of Object.entries(grouped)) {
        if (score > max) { max = score; winner = name; }
    }

    document.getElementById('weeklyWinnerDisplay').innerHTML = `<span>🏆 ${winner} - ${max} نقطة</span>`;
    document.getElementById('weeklyWinner').textContent = winner || '-';
}

// ========================================
// ===== الإحصائيات =====
// ========================================

function updateStats() {
    document.getElementById('totalSoldiers').textContent = soldiers.length;
    let total = 0;
    for (const k in tasks) total += tasks[k].length;
    document.getElementById('totalTasks').textContent = total;
    document.getElementById('totalComplaints').textContent = complaints.length;
}

function getWeekNumber() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = (now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60000) / 86400000;
    return Math.ceil((diff + start.getDay() + 1) / 7);
}

function updateUIBasedOnAccess() {
    const restrictedElements = [
        document.querySelector('.btnAdd'), document.querySelector('.btnPromote'),
        document.querySelector('.btnTask'), document.querySelector('.btnEval'),
        document.querySelectorAll('.del'),
        document.getElementById('soldierName'), document.getElementById('soldierRank'),
        document.getElementById('taskDesc'),
        document.querySelector('[data-tab="tabAccess"]')
    ];

    if (isFullAccess) {
        restrictedElements.forEach(el => {
            if (el) {
                if (el.length) {
                    el.forEach(e => { e.style.display = ''; e.disabled = false; e.style.opacity = ''; e.style.cursor = ''; });
                } else {
                    el.style.display = ''; el.disabled = false; el.style.opacity = ''; el.style.cursor = '';
                }
            }
        });
        document.querySelector('[data-tab="tabAccess"]').style.display = '';
        const msg = document.getElementById('accessRestrictionMsg');
        if (msg) msg.remove();
    } else if (isCmzAccess) {
        restrictedElements.forEach(el => {
            if (el) {
                if (el.length) {
                    el.forEach(e => {
                        if (e.tagName === 'BUTTON' || e.tagName === 'INPUT' || e.tagName === 'SELECT') {
                            e.disabled = true;
                            e.style.opacity = '0.5';
                            e.style.cursor = 'not-allowed';
                        }
                    });
                } else {
                    if (el.tagName === 'BUTTON' || el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                        el.disabled = true;
                        el.style.opacity = '0.5';
                        el.style.cursor = 'not-allowed';
                    }
                }
            }
        });
        document.querySelector('[data-tab="tabAccess"]').style.display = 'none';
        const soldiersCard = document.querySelector('#tabSoldiers .card');
        if (soldiersCard) {
            let msg = document.getElementById('accessRestrictionMsg');
            if (!msg) {
                msg = document.createElement('div');
                msg.id = 'accessRestrictionMsg';
                msg.style.cssText = 'background:#2a1a1a;border:1px solid #8b0000;border-radius:8px;padding:12px;margin:10px 0;color:#ffaa00;text-align:center;';
                msg.innerHTML = '🟡 صلاحيات محدودة - يمكنك استلام القضايا فقط';
                soldiersCard.prepend(msg);
            }
        }
    } else {
        restrictedElements.forEach(el => {
            if (el) {
                if (el.length) {
                    el.forEach(e => {
                        if (e.tagName === 'BUTTON' || e.tagName === 'INPUT' || e.tagName === 'SELECT') {
                            e.disabled = true;
                            e.style.opacity = '0.5';
                            e.style.cursor = 'not-allowed';
                        }
                    });
                } else {
                    if (el.tagName === 'BUTTON' || el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                        el.disabled = true;
                        el.style.opacity = '0.5';
                        el.style.cursor = 'not-allowed';
                    }
                }
            }
        });
        document.querySelector('[data-tab="tabAccess"]').style.display = 'none';
        const soldiersCard = document.querySelector('#tabSoldiers .card');
        if (soldiersCard) {
            let msg = document.getElementById('accessRestrictionMsg');
            if (!msg) {
                msg = document.createElement('div');
                msg.id = 'accessRestrictionMsg';
                msg.style.cssText = 'background:#2a1a1a;border:1px solid #8b0000;border-radius:8px;padding:12px;margin:10px 0;color:#ffaa00;text-align:center;';
                msg.innerHTML = '🟡 صلاحيات محدودة - عرض فقط (ممنوع الإضافة أو الحذف)';
                soldiersCard.prepend(msg);
            }
        }
    }
}

function updateDateTime() {
    const now = new Date();
    const timeStr = now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const dateStr = now.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const timeEl = document.getElementById('currentTimeDisplay');
    const dateEl = document.getElementById('currentDateDisplay');
    if (timeEl) timeEl.textContent = timeStr;
    if (dateEl) dateEl.textContent = dateStr;
}

function loadAll() {
    renderSoldiersRankList();
    renderTasks();
    renderComplaints();
    renderEvaluationLog();
    renderPromotions();
    renderAccessCodes();
    renderAccessLog();
    renderLoginLog();
    updateStats();
    updateClaimedCount();
}

document.addEventListener('DOMContentLoaded', function() {
    initDefaultCodes();
    initSoldiers();
    document.getElementById('taskSoldier')?.addEventListener('change', renderTasks);
    loadAll();
    updateDateTime();
    setInterval(updateDateTime, 1000);
});