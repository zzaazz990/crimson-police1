// ========================================
// ===== الإعدادات الأساسية =====
// ========================================

const DISCORD_WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1519311337241444676/ODFr2pGtqfSqbdfZZEcX9gsiiOtlr1L1UNThQerXI-PFkWNv2b1ofe98R-Y2DcUoQdeV";

const RANKS = [
    "Cadet", "Solo Cadet", "Officer 1", "Officer 2", "Officer 3",
    "Senior Officer", "Sergeant", "First Sergeant", "Staff Sergeant",
    "Lieutenant", "First Lieutenant"
];

// ========================================
// ===== نظام الصلاحيات والرموز =====
// ========================================

// 🔴 الرموز الكاملة (تبدأ بـ crimson)
const FULL_ACCESS_CODES = [
    "crimson25533",
    "crimson24243", 
    "crimson44343"
];

// 🟡 رموز cmz (يستلمون قضايا فقط)
const CMZ_CODES = [
    "cmz84556",
    "cmz84776"
];

// بيانات أصحاب الرموز
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
    "Marcus Foster", "wesam aldosari", "Abdullah Altamimi", "Yahya Al-Shahrani",
    "Ragnaer Al-Qahtani", "Tom Cross", "Ahmed Khaled", "Patrick Vieira",
    "William Alenzi", "Mohammed Altamimi", "Abdullah Bader", "Hamad Saif", "Basil Saud",
    "Maunijar Bin Kurdios", "Bayta Sultan", "Sultan Alkhaldi", "Albert Ruddy", 
    "Alex Raw", "Berlin Bn Knjr", "Jack Johnson", "Abdulrahman Alzuhairi", 
    "Khaled ALQahtani", "Carlo Amlyano", "Merih Demiral",
    "Sherlock Holmes", "Ali Algamdi", "Ibrahim Al Shariff", "Saeed Abdullah", 
    "Janah Nayim", "Alshm Almithb", "Wessam Alshammari", "Jax lee", 
    "Saqer Almmri", "Abdulaziz Alkhaldi", "Damien Moretti", "Shaheen Al Otaibi", 
    "Abdullah Al Qahtani", "Aziz saif",
    "Mohammed Alhot", "Abdullah Al Otaibi", "Michel Snow", "Snoop Alqhafiri", 
    "Muckled Ayed", "Rawaf Al Harbi", "Majed Amjad", "Jabir Mansor", 
    "Jassim Monsor", "Wbran Aljohani",
    "Mahsen Al Dosari", "Fahad Ali", "Abdulrahman Saad", "Naid Alotibi", 
    "Bele Botcher", "Nawaf Bin Khalidi", "Ali Alshammari", "Said Alyakh", 
    "Maqwas AlShammari", "marcus walker", "Leonardo Dicapreo", "Jax Zalsmoshen", 
    "ReX Even", "TURKI ABDULLAH",
    "Abi Ghanga", "IBRAHIM ALTMIMI", "Aziz Rift", "Salm Aljabir", 
    "3amr Alshmmari", "marcus walker", "Khalid Fahad", "William Peter", 
    "shrem alashrm", "yousef AlDuaj", "Msih Ahmed", "Mshbb Ahmed", 
    "Abdallah Alshammari", "Joe Dicapreo", "Salman abdallah",
    "Thyab Albalawi", "William Smith", "جبهستان بن مرکوز", "marzuq almaznuq", 
    "Ethan Wilton", "Arthur morgan", "Frank Sonard", "Mhyya alhanoty", 
    "mohammad abulrahman", "Masad Fatoha", "Azzam Alhashemi", "Aziz Abdallah", 
    "Will Smith", "Bruce Wayne", "Wessam Alshammari",
    "FASIAL MOHAMMED", "awtav abdo", "saad saif", "loze peter", 
    "Mhyya alhanoty", "khaled alqahtani", "james Arthur"
];

// ========================================
// ===== البيانات =====
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

// ========================================
// ===== إضافة جميع العساكر تلقائياً =====
// ========================================

function initSoldiers() {
    if (soldiers.length === 0) {
        soldiers = ALL_SOLDIERS.map((name, index) => ({
            name: name,
            rank: "Cadet",
            joinDate: new Date().toLocaleString('ar-SA'),
            id: Date.now() + index
        }));
        localStorage.setItem('soldiers', JSON.stringify(soldiers));
        console.log('✅ تم إضافة ' + soldiers.length + ' عسكري تلقائياً');
    }
}

// ========================================
// ===== التبويبات =====
// ========================================

function switchTab(tabId) {
    document.querySelectorAll('.tabContent').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tabBtn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tabBtn[data-tab="${tabId}"]`).classList.add('active');
}

// ========================================
// ===== رموز الدخول =====
// ========================================

function initDefaultCodes() {
    // إضافة رموز crimson
    FULL_ACCESS_CODES.forEach(code => {
        const existing = accessCodes.find(a => a.code === code);
        if (!existing) {
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
    
    // إضافة رموز cmz
    CMZ_CODES.forEach(code => {
        const existing = accessCodes.find(a => a.code === code);
        if (!existing) {
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
    console.log('✅ تم إضافة الرموز تلقائياً');
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

    let expiryDate = null;
    if (expiry === 'permanent') {
        expiryDate = 'دائم';
    } else {
        const days = parseInt(expiry);
        const d = new Date();
        d.setDate(d.getDate() + days);
        expiryDate = d.toISOString().split('T')[0];
    }

    const isFull = code.startsWith('CRIMSON');
    const isCmz = code.startsWith('CMZ');
    
    accessCodes.push({
        name: name,
        code: code,
        expiry: expiryDate,
        created: new Date().toISOString().split('T')[0],
        active: true,
        fullAccess: isFull,
        isCmz: isCmz,
        id: Date.now()
    });

    localStorage.setItem('accessCodes', JSON.stringify(accessCodes));
    document.getElementById('accessName').value = '';
    document.getElementById('accessCode').value = '';
    renderAccessCodes();
    sendToDiscord(`🔑 **تم إنشاء رمز جديد**\nلـ: ${name}\nالرمز: ${code}\nصلاحية: ${isFull ? '🔴 كاملة' : isCmz ? '🟡 استلام قضايا فقط' : '🟡 محدودة'}`);
    alert(`✅ تم إضافة الرمز ${code} للشخص ${name}`);
}

function deleteAccessCode(id) {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لحذف الرموز');
        return;
    }

    const code = accessCodes.find(a => a.id === id);
    if (!code) return;
    
    if (FULL_ACCESS_CODES.includes(code.code) || CMZ_CODES.includes(code.code)) {
        alert('❌ لا يمكن حذف هذا الرمز');
        return;
    }
    
    if (!confirm(`هل تريد إيقاف الرمز ${code.code} للشخص ${code.name}؟`)) return;

    code.active = false;
    localStorage.setItem('accessCodes', JSON.stringify(accessCodes));
    renderAccessCodes();
    sendToDiscord(`⛔ **تم إيقاف الرمز**\nالرمز: ${code.code}\nالشخص: ${code.name}`);
}

function renderAccessCodes() {
    const list = document.getElementById('accessList');
    if (!list) return;

    // 🔴 فقط crimson يشوف رموز الدخول
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
        let typeLabel = '🟡 محدود';
        if (isFull) typeLabel = '🔴 كامل';
        else if (isCmz) typeLabel = '🟡 قضايا فقط';
        
        return `
        <div class="listItem">
            <div>
                <strong>${a.name}</strong>
                <span style="color:#ffd700;font-weight:700;margin:0 8px;">${a.code}</span>
                ${typeLabel}
                <span class="${a.active && (a.expiry === 'دائم' || a.expiry >= new Date().toISOString().split('T')[0]) ? 'status-active' : 'status-expired'}">
                    ${a.active && (a.expiry === 'دائم' || a.expiry >= new Date().toISOString().split('T')[0]) ? '✅ نشط' : '⛔ موقف'}
                </span>
                <br><small style="color:#555;">صلاحية: ${a.expiry}</small>
            </div>
            ${!FULL_ACCESS_CODES.includes(a.code) && !CMZ_CODES.includes(a.code) ? `<button class="del" onclick="deleteAccessCode(${a.id})">✖</button>` : '<span style="color:#555;font-size:12px;">محمي</span>'}
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
// ===== تبديل طريقة الدخول =====
// ========================================

function switchLoginMethod(method) {
    currentLoginMethod = method;

    document.querySelectorAll('.methodBtn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.methodBtn[onclick*="${method}"]`)?.classList.add('active');

    document.getElementById('loginMethodPassword').style.display = method === 'password' ? 'block' : 'none';
    document.getElementById('loginMethodCode').style.display = method === 'code' ? 'block' : 'none';

    document.getElementById('loginError').textContent = '';
}

// ========================================
// ===== الدخول بكلمة المرور =====
// ========================================

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
        sendToDiscord(`🟢 **دخول المدير العام**\n👤 ${currentUser} دخل إلى النظام (🔴 صلاحيات كاملة)`);
        showWelcomeMessage(currentUser, '🔴 صلاحيات كاملة');
    } else {
        errorEl.textContent = '❌ كلمة المرور خاطئة';
    }
}

// ========================================
// ===== الدخول برمز =====
// ========================================

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

    // تحديد الصلاحية
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
    
    const fullText = isFull ? '🔴 صلاحيات كاملة' : isCmz ? '🟡 استلام قضايا فقط' : '🟡 صلاحيات محدودة (عرض فقط)';
    sendToDiscord(`🟢 **دخول**\n👤 ${displayName} دخل إلى النظام\n🔑 الرمز: ${inputCode}\n${fullText}`);
    showWelcomeMessage(displayName, fullText);
}

// ========================================
// ===== رسالة الترحيب =====
// ========================================

function showWelcomeMessage(name, accessLevel) {
    const now = new Date();
    const timeStr = now.toLocaleString('ar-SA', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    const dateStr = now.toLocaleDateString('ar-SA');
    
    sendToDiscord(`🎉 **ترحيب**\n👤 ${name} دخل إلى النظام\n⏰ ${timeStr} - ${dateStr}\n${accessLevel}`);
    
    alert(`🎉 مرحباً ${name}!\n⏰ الساعة: ${timeStr}\n📅 التاريخ: ${dateStr}\n${accessLevel}`);
    
    const statusDiv = document.getElementById('discordStatus');
    if (statusDiv) {
        statusDiv.textContent = `🎉 ${name} دخل الساعة ${timeStr}`;
        statusDiv.style.color = '#ffd700';
        setTimeout(() => {
            statusDiv.textContent = '⚡ جاهز';
            statusDiv.style.color = '#888';
        }, 5000);
    }
}

// ========================================
// ===== تحديث الواجهة حسب الصلاحيات =====
// ========================================

function updateUIBasedOnAccess() {
    // العناصر المحظورة على غير crimson
    const restrictedElements = [
        document.querySelector('.btnAdd'),
        document.querySelector('.btnPromote'),
        document.querySelector('.btnTask'),
        document.querySelector('.btnEval'),
        document.querySelectorAll('.del'),
        document.getElementById('soldierName'),
        document.getElementById('soldierRank'),
        document.getElementById('taskDesc'),
        document.querySelector('[data-tab="tabAccess"]')
    ];

    if (isFullAccess) {
        // 🔴 crimson: كل شي مباح
        restrictedElements.forEach(el => {
            if (el) {
                if (el.length) {
                    el.forEach(e => { e.style.display = ''; e.disabled = false; e.style.opacity = ''; e.style.cursor = ''; });
                } else {
                    el.style.display = '';
                    el.disabled = false;
                    el.style.opacity = '';
                    el.style.cursor = '';
                }
            }
        });
        const accessTab = document.querySelector('[data-tab="tabAccess"]');
        if (accessTab) accessTab.style.display = '';
        
        const msg = document.getElementById('accessRestrictionMsg');
        if (msg) msg.remove();
        
    } else if (isCmzAccess) {
        // 🟡 cmz: يستلم قضايا فقط - يخفي رموز الدخول
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
        
        // 🔴 إخفاء تبويب رموز الدخول
        const accessTab = document.querySelector('[data-tab="tabAccess"]');
        if (accessTab) accessTab.style.display = 'none';
        
        // رسالة توضيحية
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
        // أي رمز آخر: عرض فقط
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
        const accessTab = document.querySelector('[data-tab="tabAccess"]');
        if (accessTab) accessTab.style.display = 'none';
        
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

// ========================================
// ===== الخروج =====
// ========================================

function adminLogout() {
    if (currentUser) {
        addLoginRecord(currentUser, 'خروج', currentUserCode);
        sendToDiscord(`🔴 **خروج**\n👤 ${currentUser} خرج من النظام`);
    }
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('publicPage').style.display = 'block';
    currentUser = null;
    currentUserCode = null;
    isFullAccess = false;
    isCmzAccess = false;
}

// ========================================
// ===== سجل الدخول (الرموز مخفية) =====
// ========================================

function addLoginRecord(username, action, code) {
    const now = new Date();
    const timeStr = now.toLocaleString('ar-SA', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const dateStr = now.toLocaleDateString('ar-SA');

    let cleanName = username;
    if (cleanName.includes('|')) {
        cleanName = cleanName.split('|')[1].trim();
    }
    cleanName = cleanName.replace(/\([^)]*\)/g, '').trim();

    loginLog.push({
        username: cleanName,
        action: action || 'دخول',
        code: code || '-',
        time: timeStr,
        date: dateStr,
        timestamp: now.getTime()
    });

    if (loginLog.length > 100) {
        loginLog = loginLog.slice(-100);
    }

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
            <span>
                <span class="logUser">${entry.username}</span>
                <span class="logAction">${entry.action}</span>
            </span>
            <span class="logTime">${entry.date} - ${entry.time}</span>
        </div>
    `).join('');
}

// ========================================
// ===== الصفحة الرئيسية (رفع القضية) =====
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
// ===== رفع القضية =====
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
        name,
        type,
        desc,
        date: new Date().toLocaleString('ar-SA'),
        status: 'قيد المراجعة',
        claimedBy: null,
        claimedAt: null
    });

    localStorage.setItem('complaints', JSON.stringify(complaints));

    document.getElementById('citizenName').value = '';
    document.getElementById('complaintDesc').value = '';

    status.className = 'statusMessage success';
    status.innerHTML = '✅ تم رفع القضية بنجاح! سيتم مراجعتها';

    sendToDiscord(`📋 **قضية جديدة من مواطن**\n` +
        `الاسم: ${name}\n` +
        `النوع: ${type}\n` +
        `${desc.substring(0, 80)}${desc.length > 80 ? '...' : ''}`);

    if (document.getElementById('dashboard').style.display !== 'none') {
        renderComplaints();
        updateStats();
    }
}

// ========================================
// ===== نظام استلام القضايا =====
// ========================================

function claimComplaint(id) {
    // ✅ cmz يقدر يستلم قضايا
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

    sendToDiscord(`📥 **تم استلام قضية**\n👤 ${currentUser} استلم قضية من ${complaint.name}\n📋 ${complaint.desc.substring(0, 50)}...`);
    alert(`✅ تم استلام القضية بنجاح`);
}

function unclaimComplaint(id) {
    // ✅ cmz يقدر يلغي استلام قضيته
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
// ===== عرض القضايا =====
// ========================================

function renderComplaints() {
    const list = document.getElementById('complaintList');
    if (!list) return;

    let visibleComplaints = complaints;
    if (!isFullAccess && !isCmzAccess) {
        visibleComplaints = complaints.filter(c => 
            !c.claimedBy || c.claimedBy === currentUser
        );
    }

    if (visibleComplaints.length === 0) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا توجد قضايا</div>';
        return;
    }

    list.innerHTML = visibleComplaints.slice().reverse().map(c => {
        const isClaimed = c.claimedBy !== null && c.claimedBy !== undefined;
        const isMine = c.claimedBy === currentUser;
        const canClaim = (isFullAccess || isCmzAccess) && !isClaimed;
        const canUnclaim = (isFullAccess || isCmzAccess) && isMine;

        return `
        <div class="listItem" style="border-color: ${isClaimed ? '#ffd700' : '#8b0000'}; flex-wrap:wrap;">
            <div style="flex:1;min-width:150px;">
                <strong>${c.name}</strong> (${c.type})
                <br><small>${c.desc.substring(0, 50)}${c.desc.length > 50 ? '...' : ''}</small>
                <br><small style="color:#555;">${c.date}</small>
                <br>
                <span style="font-size:12px;color:${isClaimed ? '#ffd700' : '#00ff00'};">
                    ${isClaimed ? `📥 مستلمة من: ${c.claimedBy}` : '📤 قيد المراجعة'}
                </span>
                ${isMine ? `<span style="font-size:12px;color:#ff4444;"> (أنت المستلم)</span>` : ''}
            </div>
            <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:5px;">
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
// ===== Discord =====
// ========================================

async function sendToDiscord(message) {
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
                username: 'Internal Affairs',
                avatar_url: 'https://i.imgur.com/4M34hi2.png'
            })
        });
        console.log('✅ تم الإرسال إلى ديسكورد');
    } catch (e) {
        console.log('❌ خطأ في الإرسال:', e);
    }
}

function sendCustomMessage() {
    if (!isFullAccess) {
        alert('❌ ليس لديك صلاحية لإرسال رسائل مخصصة');
        return;
    }
    const msg = document.getElementById('customDiscordMsg').value;
    if (msg) {
        sendToDiscord('📢 ' + msg);
        document.getElementById('customDiscordMsg').value = '';
    }
}

// ========================================
// ===== العساكر =====
// ========================================

function addSoldier() {
    // ❌ منع الإضافة لغير crimson
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

    const newSoldier = {
        name: name,
        rank: rank,
        joinDate: new Date().toLocaleString('ar-SA'),
        id: Date.now()
    };
    
    soldiers.push(newSoldier);
    localStorage.setItem('soldiers', JSON.stringify(soldiers));
    
    document.getElementById('soldierName').value = '';
    
    renderSoldiers();
    updateSelects();
    updateStats();
    
    sendToDiscord(`➕ تم إضافة عسكري: **${name}** (${rank})`);
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
    localStorage.setItem('soldiers', JSON.stringify(soldiers));
    
    renderSoldiers();
    updateSelects();
    updateStats();
}

function renderSoldiers() {
    const list = document.getElementById('soldierList');
    if (!list) return;
    
    if (soldiers.length === 0) {
        list.innerHTML = '<div class="listItem" style="border-color:#444;">لا يوجد عساكر</div>';
        return;
    }
    
    list.innerHTML = soldiers.map(s => `
        <div class="listItem">
            <span>👤 ${s.name} <span class="rank">${s.rank}</span></span>
            ${isFullAccess ? `<button class="del" onclick="deleteSoldier(${s.id})">✖</button>` : '<span style="color:#555;font-size:12px;">🔒</span>'}
        </div>
    `).join('');
}

function updateSelects() {
    const selectIds = ['taskSoldier', 'evalSoldier', 'promotionSoldier'];
    
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
    renderSoldiers();
    updateSelects();
    
    sendToDiscord(`⭐ **ترقية**\n${name} ← ${newRank}`);
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
    sendToDiscord(`📋 **مهمة جديدة** لـ ${soldier}: ${desc}`);
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
        soldier,
        hours,
        reports,
        dispatch,
        score,
        discipline,
        total,
        week,
        date: new Date().toLocaleString('ar-SA')
    });
    
    localStorage.setItem('evaluations', JSON.stringify(evaluations));
    renderEvaluationLog();
    updateStats();
    sendToDiscord(`⭐ **تقييم جديد**\n${soldier}: ${total} نقطة`);
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
        if (score > max) {
            max = score;
            winner = name;
        }
    }
    
    document.getElementById('weeklyWinnerDisplay').innerHTML = `<span>🏆 ${winner} - ${max} نقطة</span>`;
    document.getElementById('weeklyWinner').textContent = winner || '-';
    sendToDiscord(`🏆 **عسكري الأسبوع**\n${winner} (${max} نقطة)`);
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

// ========================================
// ===== تحديث الوقت والتاريخ =====
// ========================================

function updateDateTime() {
    const now = new Date();
    
    const timeStr = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    const dateStr = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    const timeEl = document.getElementById('currentTimeDisplay');
    const dateEl = document.getElementById('currentDateDisplay');
    
    if (timeEl) timeEl.textContent = timeStr;
    if (dateEl) dateEl.textContent = dateStr;
}

// ========================================
// ===== تحميل البيانات =====
// ========================================

function loadAll() {
    console.log('🔄 جاري تحميل البيانات...');
    
    renderSoldiers();
    updateSelects();
    renderTasks();
    renderComplaints();
    renderEvaluationLog();
    renderPromotions();
    renderAccessCodes();
    renderAccessLog();
    renderLoginLog();
    updateStats();
    updateClaimedCount();
    
    console.log('✅ تم تحميل جميع البيانات - عدد العساكر: ' + soldiers.length);
}

// ========================================
// ===== التحميل عند فتح الصفحة =====
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 جاري تشغيل النظام...');
    
    initDefaultCodes();
    initSoldiers();
    
    const taskSelect = document.getElementById('taskSoldier');
    if (taskSelect) {
        taskSelect.addEventListener('change', renderTasks);
    }
    
    loadAll();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    console.log('✅ النظام جاهز للعمل');
});

// ========================================
// ===== إرسال تقرير يومي =====
// ========================================

setInterval(() => {
    const now = new Date();
    if (now.getHours() === 9 && now.getMinutes() === 0) {
        const today = new Date().toLocaleDateString('ar-SA');
        sendToDiscord(`📊 **تقرير الصباح** - ${today}\n` +
            `👮 العساكر: ${soldiers.length}\n` +
            `📋 القضايا: ${complaints.length}\n` +
            `🔑 الرموز النشطة: ${accessCodes.filter(a => a.active).length}\n` +
            `النظام يعمل بكفاءة ✅`);
    }
}, 60000);