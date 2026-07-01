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

const FULL_ACCESS_PASSWORD = "crim578475";

const NO_DELETE_CODES = [
    "cri5415454",
    "cri54144",
    "cri53254",
    "cri541444",
    "cri541114",
    "cri54412"
];

const CODE_USERS = {
    "crim578475": { name: "Marcus Foster", id: "U-0" },
    "cri5415454": { name: "Tom Cross", id: "U-11" },
    "cri54144": { name: "William Alenzi", id: "U-20" },
    "cri53254": { name: "Mohammed Altamimi", id: "U-21" },
    "cri541444": { name: "Alexander Foster", id: "U-25" },
    "cri541114": { name: "Munijar Bin Kurdis", id: "U-31" },
    "cri54412": { name: "Matrak AlShaibani", id: "U-39" }
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

let soldierStats = JSON.parse(localStorage.getItem('soldierStats')) || {};

// ========================================
// ===== متطلبات الترقيات =====
// ========================================

const RANK_REQUIREMENTS = {
    'Officer II': {
        points: 1,
        reports: 15,
        hours: 15,
        dispatch: 10,
        requirements: ['ونقين']
    },
    'Officer III': {
        points: 3,
        reports: 20,
        hours: 40,
        dispatch: 15,
        requirements: ['3 ونقات', 'دخول الأكاديمية']
    },
    'Senior Officer': {
        reports: 30,
        hours: 60,
        dispatch: 25,
        requirements: ['تقييم 3 كدت', 'دخول الشؤون']
    },
    'Sergeant': {
        reports: 45,
        hours: 80,
        points: 4,
        requirements: ['تقييم 6 كدت', '4 ونقات']
    },
    'First Sergeant': {
        reports: 65,
        hours: 100,
        requirements: ['دورة الواتش كوماندر', 'جميع الونقات']
    }
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
let canDelete = false;
let currentLoginMethod = 'password';

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
            soldierStats[s.name] = { points: 0, hours: 0, reports: 0, dispatch: 0, completed: [] };
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

    const stats = soldierStats[soldier.name] || { points: 0, hours: 0, reports: 0, dispatch: 0 };
    
    let isComplete = true;
    let missingRequirements = [];
    
    if (requirements.points !== undefined && stats.points < requirements.points) {
        isComplete = false;
        missingRequirements.push(`نقاط: ${stats.points}/${requirements.points}`);
    }
    if (requirements.reports !== undefined && stats.reports < requirements.reports) {
        isComplete = false;
        missingRequirements.push(`تقارير: ${stats.reports}/${requirements.reports}`);
    }
    if (requirements.hours !== undefined && stats.hours < requirements.hours) {
        isComplete = false;
        missingRequirements.push(`ساعات: ${stats.hours}/${requirements.hours}`);
    }
    if (requirements.dispatch !== undefined && stats.dispatch < requirements.dispatch) {
        isComplete = false;
        missingRequirements.push(`ديسباتش: ${stats.dispatch}/${requirements.dispatch}`);
    }

    return {
        isComplete,
        missingRequirements: missingRequirements.join(' | ')
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
        const stats = soldierStats[s.name] || { points: 0, hours: 0, reports: 0, dispatch: 0 };
        const rankCheck = checkRankCompletion(s);
        let statusHTML = '';

        if (rankCheck) {
            if (rankCheck.isComplete) {
                statusHTML = `<span class="soldierStatus status-complete">✅ مكتمل <button class="promoteBtn" onclick="requestPromotion('${s.name}')">طلب ترقية</button></span>`;
            } else {
                statusHTML = `<span class="soldierStatus status-incomplete">⏳ ${rankCheck.missingRequirements}</span>`;
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
                               onchange="updateSoldierStat(${s.id}, 'points', this.value)" ${canDelete ? '' : 'disabled'} />
                    </div>
                    <div class="statItem">
                        <i class="fas fa-clock"></i>
                        <span class="statLabel">الساعات</span>
                        <input type="number" id="hours_${s.id}" value="${stats.hours || 0}" min="0" step="0.5"
                               onchange="updateSoldierStat(${s.id}, 'hours', this.value)" ${canDelete ? '' : 'disabled'} />
                    </div>
                    <div class="statItem">
                        <i class="fas fa-file-alt"></i>
                        <span class="statLabel">التقارير</span>
                        <input type="number" id="reports_${s.id}" value="${stats.reports || 0}" min="0"
                               onchange="updateSoldierStat(${s.id}, 'reports', this.value)" ${canDelete ? '' : 'disabled'} />
                    </div>
                    <div class="statItem">
                        <i class="fas fa-bolt"></i>
                        <span class="statLabel">الديسباتش</span>
                        <input type="number" id="dispatch_${s.id}" value="${stats.dispatch || 0}" min="0"
                               onchange="updateSoldierStat(${s.id}, 'dispatch', this.value)" ${canDelete ? '' : 'disabled'} />
                    </div>
                    ${canDelete ? `<button class="del" onclick="deleteSoldier(${s.id})">✖</button>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// ===== تحديث إحصائيات العسكري =====
// ========================================

function updateSoldierStat(id, type, value) {
    if (!canDelete) {
        alert('❌ ليس لديك صلاحية لتعديل الإحصائيات');
        return;
    }

    const soldier = soldiers.find(s => s.id === id);
    if (!soldier) return;

    if (!soldierStats[soldier.name]) {
        soldierStats[soldier.name] = { points: 0, hours: 0, reports: 0, dispatch: 0 };
    }

    const numValue = parseFloat(value) || 0;
    soldierStats[soldier.name][type] = numValue;
    localStorage.setItem('soldierStats', JSON.stringify(soldierStats));

    const rankCheck = checkRankCompletion(soldier);
    if (rankCheck && rankCheck.isComplete) {
        const discordMsg = `**🎉 اكتملت متطلبات الترقية!**\n` +
            `👤 **العسكري:** ${soldier.name}\n` +
            `🎖️ **الرتبة الحالية:** ${soldier.rank}\n` +
            `📊 **جميع المتطلبات مكتملة**\n` +
            `📢 **يستحق الترقية إلى الرتبة التالية**\n` +
            `🛡️ نظام الشؤون الداخلية`;
        
        sendToDiscord(discordMsg);
        alert(`🎉 ${soldier.name} أكمل جميع متطلبات الترقية!`);
    }

    renderSoldiersRankList();
}

// ========================================
// ===== طلب ترقية =====
// ========================================

function requestPromotion(name) {
    const soldier = soldiers.find(s => s.name === name);
    if (!soldier) return;

    const rankCheck = checkRankCompletion(soldier);
    if (!rankCheck || !rankCheck.isComplete) {
        alert('❌ لم تكتمل جميع المتطلبات بعد');
        return;
    }

    const discordMsg = `**⭐ طلب ترقية جديد**\n` +
        `👤 **العسكري:** ${name}\n` +
        `🎖️ **الرتبة الحالية:** ${soldier.rank}\n` +
        `✅ **المتطلبات:** مكتملة\n` +
        `📢 **يرجى مراجعة طلب الترقية**\n` +
        `🛡️ نظام الشؤون الداخلية`;

    sendToDiscord(discordMsg);
    alert(`✅ تم إرسال طلب ترقية للعسكري ${name}`);
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
// ===== تحديث القوائم المنسدلة =====
// ========================================

function updateSelects() {
    const selectIds = ['promotionSoldier', 'evalSoldier'];
    
    selectIds.forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        
        const currentValue = sel.value;
        sel.innerHTML = '';
        
        if (soldiers.length === 0) {
            sel.innerHTML = '<option value="">لا يوجد عساكر</option>';
            return;
        }
        
        soldiers.forEach(s => {
            const option = document.createElement('option');
            option.value = s.name;
            option.textContent = s.name + ' (' + s.rank + ')';
            sel.appendChild(option);
        });
        
        if (currentValue && soldiers.find(s => s.name === currentValue)) {
            sel.value = currentValue;
        }
    });
}

// ========================================
// ===== حفظ واسترجاع الجلسة =====
// ========================================

function saveSession(user, code, fullAccess, canDelete) {
    localStorage.setItem('session_user', JSON.stringify(user));
    localStorage.setItem('session_code', code);
    localStorage.setItem('session_fullAccess', JSON.stringify(fullAccess));
    localStorage.setItem('session_canDelete', JSON.stringify(canDelete));
}

function loadSession() {
    const user = localStorage.getItem('session_user');
    const code = localStorage.getItem('session_code');
    const fullAccess = JSON.parse(localStorage.getItem('session_fullAccess'));
    const canDelete = JSON.parse(localStorage.getItem('session_canDelete'));
    
    return { user, code, fullAccess, canDelete };
}

function clearSession() {
    localStorage.removeItem('session_user');
    localStorage.removeItem('session_code');
    localStorage.removeItem('session_fullAccess');
    localStorage.removeItem('session_canDelete');
}

function checkSession() {
    const session = loadSession();
    if (session.user && session.user !== 'null') {
        currentUser = session.user;
        currentUserCode = session.code;
        isFullAccess = session.fullAccess || false;
        canDelete = session.canDelete || false;
        
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('currentUserDisplay').textContent = `👤 ${currentUser} (${canDelete ? '🔴 كامل' : '🟡 بدون حذف'})`;
        
        loadAll();
        updateUIBasedOnAccess();
        return true;
    }
    return false;
}

// ========================================
// ===== رموز الدخول =====
// ========================================

function initDefaultCodes() {
    if (!accessCodes.find(a => a.code === FULL_ACCESS_PASSWORD)) {
        accessCodes.push({
            name: "Marcus Foster",
            code: FULL_ACCESS_PASSWORD,
            expiry: "دائم",
            created: new Date().toISOString().split('T')[0],
            active: true,
            fullAccess: true,
            id: Date.now() + Math.random() * 1000
        });
    }
    
    NO_DELETE_CODES.forEach(code => {
        if (!accessCodes.find(a => a.code === code)) {
            const userData = CODE_USERS[code];
            accessCodes.push({
                name: userData ? userData.name : code,
                code: code,
                expiry: "دائم",
                created: new Date().toISOString().split('T')[0],
                active: true,
                fullAccess: false,
                id: Date.now() + Math.random() * 1000
            });
        }
    });
    
    localStorage.setItem('accessCodes', JSON.stringify(accessCodes));
}

function addAccessCode() {
    if (!canDelete) {
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

    let expiryDate = expiry === 'permanent' ? 'دائم' : (() => { const d = new Date();
        d.setDate(d.getDate() + parseInt(expiry)); return d.toISOString().split('T')[0]; })();

    accessCodes.push({
        name,
        code,
        expiry: expiryDate,
        created: new Date().toISOString().split('T')[0],
        active: true,
        fullAccess: false,
        id: Date.now()
    });

    localStorage.setItem('accessCodes', JSON.stringify(accessCodes));
    document.getElementById('accessName').value = '';
    document.getElementById('accessCode').value = '';
    renderAccessCodes();

    alert(`✅ تم إضافة الرمز ${code} للشخص ${name}`);
}

function deleteAccessCode(id) {
    if (!canDelete) {
        alert('❌ ليس لديك صلاحية لحذف الرموز');
        return;
    }
    const code = accessCodes.find(a => a.id === id);
    if (!code) return;
    if (code.code === FULL_ACCESS_PASSWORD) {
        alert('❌ لا يمكن حذف رمز كامل الصلاحية');
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
    if (!canDelete) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">🔒 غير مصرح لك بمشاهدة هذا القسم</div>';
        return;
    }
    if (accessCodes.length === 0) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد رموز</div>';
        return;
    }
    list.innerHTML = accessCodes.map(a => {
        const isFull = a.code === FULL_ACCESS_PASSWORD;
        const isBanned = a.banned === true;
        let typeLabel = '🟡 محدود';
        if (isFull) typeLabel = '🔴 كامل';
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
        `;
    }).join('');
}

function renderAccessLog() {
    const list = document.getElementById('accessLog');
    if (!list) return;
    if (!canDelete) {
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

    if (pass === FULL_ACCESS_PASSWORD) {
        const userData = CODE_USERS[FULL_ACCESS_PASSWORD];
        currentUser = `${userData.id} | ${userData.name}`;
        currentUserCode = "FULL";
        isFullAccess = true;
        canDelete = true;

        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('currentUserDisplay').textContent = `👤 ${currentUser} (🔴 كامل)`;
        addLoginRecord(currentUser, 'دخول', 'FULL');
        errorEl.textContent = '';
        loadAll();
        updateUIBasedOnAccess();
        showWelcomeMessage(currentUser);
        saveSession(currentUser, currentUserCode, isFullAccess, canDelete);
        return;
    }
    
    if (NO_DELETE_CODES.includes(pass)) {
        const userData = CODE_USERS[pass];
        currentUser = `${userData.id} | ${userData.name}`;
        currentUserCode = pass;
        isFullAccess = false;
        canDelete = false;

        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('currentUserDisplay').textContent = `👤 ${currentUser} (🟡 بدون حذف)`;
        addLoginRecord(currentUser, 'دخول', pass);
        errorEl.textContent = '';
        loadAll();
        updateUIBasedOnAccess();
        showWelcomeMessage(currentUser);
        saveSession(currentUser, currentUserCode, isFullAccess, canDelete);
        return;
    }

    errorEl.textContent = '❌ كلمة المرور خاطئة';
}

function loginWithCode() {
    const inputCode = document.getElementById('accessCodeInput').value.trim();
    const errorEl = document.getElementById('loginError');

    if (!inputCode) {
        errorEl.textContent = '❌ الرجاء إدخال رمز الدخول';
        return;
    }

    if (inputCode === FULL_ACCESS_PASSWORD) {
        const userData = CODE_USERS[FULL_ACCESS_PASSWORD];
        currentUser = `${userData.id} | ${userData.name}`;
        currentUserCode = "FULL";
        isFullAccess = true;
        canDelete = true;

        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('currentUserDisplay').textContent = `👤 ${currentUser} (🔴 كامل)`;
        addLoginRecord(currentUser, 'دخول', 'FULL');
        errorEl.textContent = '';
        loadAll();
        updateUIBasedOnAccess();
        showWelcomeMessage(currentUser);
        saveSession(currentUser, currentUserCode, isFullAccess, canDelete);
        return;
    }

    if (NO_DELETE_CODES.includes(inputCode)) {
        const userData = CODE_USERS[inputCode];
        currentUser = `${userData.id} | ${userData.name}`;
        currentUserCode = inputCode;
        isFullAccess = false;
        canDelete = false;

        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('currentUserDisplay').textContent = `👤 ${currentUser} (🟡 بدون حذف)`;
        addLoginRecord(currentUser, 'دخول', inputCode);
        errorEl.textContent = '';
        loadAll();
        updateUIBasedOnAccess();
        showWelcomeMessage(currentUser);
        saveSession(currentUser, currentUserCode, isFullAccess, canDelete);
        return;
    }

    errorEl.textContent = '❌ رمز غير صحيح';
}

// ========================================
// ===== رسالة الترحيب =====
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
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    overlay.style.zIndex = '9999';

    const now = new Date();
    const timeStr = now.toLocaleString('ar-SA', { hour: '2-digit', minute: '2-digit', hour12: true });
    const dateStr = now.toLocaleDateString('ar-SA');
    
    let accessLevel = '🟡 عرض فقط';
    if (canDelete) {
        accessLevel = '🔴 صلاحيات كاملة';
    }
    
    sendToDiscord(
        `**🎉 مرحباً بك في الشؤون الداخلية**\n` +
        `👤 **العضو:** ${cleanName}\n` +
        `⏰ **الساعة:** ${timeStr}\n` +
        `📅 **التاريخ:** ${dateStr}\n` +
        `${accessLevel}\n` +
        `🛡️ نظام الشؤون الداخلية`
    );
}

function closeWelcome() {
    const overlay = document.getElementById('welcomeOverlay');
    overlay.style.display = 'none';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
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
// ===== الخروج =====
// ========================================

function adminLogout() {
    if (currentUser) {
        addLoginRecord(currentUser, 'خروج', currentUserCode);
        sendToDiscord(`🔴 **خروج**\n👤 **${currentUser}** خرج من النظام`);
    }
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
    currentUser = null;
    currentUserCode = null;
    isFullAccess = false;
    canDelete = false;
    clearSession();
}

// ========================================
// ===== العساكر =====
// ========================================

function addSoldier() {
    if (!canDelete) {
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
        name,
        rank,
        joinDate: new Date().toLocaleString('ar-SA'),
        id: Date.now()
    });

    localStorage.setItem('soldiers', JSON.stringify(soldiers));

    if (!soldierStats[name]) {
        soldierStats[name] = { points: 0, hours: 0, reports: 0, dispatch: 0 };
    }
    localStorage.setItem('soldierStats', JSON.stringify(soldierStats));

    document.getElementById('soldierName').value = '';

    renderSoldiersRankList();
    updateSelects();
    updateStats();

    alert(`✅ تم إضافة العسكري ${name} بنجاح`);
}

function deleteSoldier(id) {
    if (!canDelete) {
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
    updateSelects();
    updateStats();
}

// ========================================
// ===== الترقيات =====
// ========================================

function promoteSoldier() {
    if (!canDelete) {
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
    updateSelects();

    sendToDiscord(`⭐ **ترقية**\n👤 **العسكري:** ${name}\n⬆️ **من:** ${s.rank} ← ${newRank}`);
    alert(`✅ تمت ترقية ${name} إلى ${newRank}`);
}

function deletePromotion(index) {
    if (!canDelete) {
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
                ${canDelete ? `<button class="del" onclick="deletePromotion(${realIndex})">✖</button>` : ''}
            </div>
        `;
    }).join('');
}

// ========================================
// ===== التقييم =====
// ========================================

function submitEvaluation() {
    if (!canDelete) {
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
    const points = parseInt(document.getElementById('points').value) || 0;

    const total = hours + (reports * 5) + dispatch + (score * 2) + discipline + points;
    const week = getWeekNumber();

    evaluations.push({
        soldier,
        hours,
        reports,
        dispatch,
        score,
        discipline,
        points,
        total,
        week,
        date: new Date().toLocaleString('ar-SA')
    });

    if (!soldierStats[soldier]) {
        soldierStats[soldier] = { points: 0, hours: 0, reports: 0, dispatch: 0 };
    }
    soldierStats[soldier].hours += hours;
    soldierStats[soldier].reports += reports;
    soldierStats[soldier].dispatch += dispatch;
    soldierStats[soldier].points += points;
    localStorage.setItem('soldierStats', JSON.stringify(soldierStats));

    localStorage.setItem('evaluations', JSON.stringify(evaluations));
    renderEvaluationLog();
    renderSoldiersRankList();
    updateStats();

    const soldierObj = soldiers.find(s => s.name === soldier);
    if (soldierObj) {
        const rankCheck = checkRankCompletion(soldierObj);
        if (rankCheck && rankCheck.isComplete) {
            const discordMsg = `**🎉 اكتملت متطلبات الترقية!**\n` +
                `👤 **العسكري:** ${soldier}\n` +
                `🎖️ **الرتبة الحالية:** ${soldierObj.rank}\n` +
                `📊 **جميع المتطلبات مكتملة**\n` +
                `📢 **يستحق الترقية إلى الرتبة التالية**\n` +
                `🛡️ نظام الشؤون الداخلية`;
            
            sendToDiscord(discordMsg);
            alert(`🎉 ${soldier} أكمل جميع متطلبات الترقية!`);
        }
    }

    sendToDiscord(`⭐ **تقييم جديد**\n👤 **العسكري:** ${soldier}\n📊 **المجموع:** ${total} نقطة`);
    alert(`✅ تم تقييم ${soldier}\nالمجموع: ${total} نقطة`);
}

function deleteEvaluation(index) {
    if (!canDelete) {
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
                <span><strong>${e.soldier}</strong> - ${e.total} نقطة<br><small>الانضباط: ${e.discipline} | الونقات: ${e.points}</small></span>
                ${canDelete ? `<button class="del" onclick="deleteEvaluation(${realIndex})">✖</button>` : ''}
            </div>
        `;
    }).join('');
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

    let winner = null,
        max = 0;
    for (const [name, score] of Object.entries(grouped)) {
        if (score > max) { max = score;
            winner = name; }
    }

    document.getElementById('weeklyWinnerDisplay').innerHTML = `<span>🏆 ${winner} - ${max} نقطة</span>`;
    document.getElementById('weeklyWinner').textContent = winner || '-';
    
    sendToDiscord(`🏆 **عسكري الأسبوع**\n👤 **الفائز:** ${winner}\n📊 **النقاط:** ${max} نقطة`);
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
    const deleteElements = [
        document.querySelectorAll('.del'),
        document.querySelectorAll('.btnDelete')
    ];

    if (canDelete) {
        deleteElements.forEach(el => {
            if (el) {
                if (el.length) {
                    el.forEach(e => { e.style.display = ''; e.disabled = false; });
                } else {
                    el.style.display = ''; el.disabled = false;
                }
            }
        });
        document.querySelector('[data-tab="tabAccess"]').style.display = '';
        const msg = document.getElementById('accessRestrictionMsg');
        if (msg) msg.remove();
    } else {
        deleteElements.forEach(el => {
            if (el) {
                if (el.length) {
                    el.forEach(e => { e.style.display = 'none'; });
                } else {
                    el.style.display = 'none';
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
                msg.style.cssText = 'background:#1a2a4a;border:1px solid #1e88e5;border-radius:8px;padding:12px;margin:10px 0;color:#4fc3f7;text-align:center;';
                msg.innerHTML = '🟡 صلاحيات بدون حذف - يمكنك الإضافة والتعديل لكن لا يمكنك الحذف';
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
    updateSelects();
}

// ========================================
// ===== دوال وهمية =====
// ========================================

function renderTasks() {
    const list = document.getElementById('taskList');
    if (list) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد مهام</div>';
    }
}

function renderComplaints() {
    const list = document.getElementById('complaintList');
    if (list) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد قضايا</div>';
    }
}

function updateClaimedCount() {}

async function sendToDiscord(message) {
    const DISCORD_WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1519311337241444676/ODFr2pGtqfSqbdfZZEcX9gsiiOtlr1L1UNThQerXI-PFkWNv2b1ofe98R-Y2DcUoQdeV";
    if (!DISCORD_WEBHOOK_URL) {
        console.log('⚠️ Webhook غير مضبوط');
        return;
    }
    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: message,
                username: '🛡️ Internal Affairs',
                avatar_url: 'https://i.imgur.com/4M34hi2.png'
            })
        });
        console.log('✅ تم الإرسال إلى ديسكورد');
    } catch (e) {
        console.log('❌ خطأ في الإرسال:', e);
    }
}

function sendCustomMessage() {
    const msg = document.getElementById('customDiscordMsg');
    if (msg && msg.value) {
        sendToDiscord(`**📢 رسالة مخصصة**\n${msg.value}`);
        msg.value = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initDefaultCodes();
    initSoldiers();
    
    if (!checkSession()) {
        document.getElementById('loginPage').style.display = 'flex';
        document.getElementById('dashboard').style.display = 'none';
    }
    
    loadAll();
    updateDateTime();
    setInterval(updateDateTime, 1000);
});