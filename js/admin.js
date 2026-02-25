// =====================================================
// admin.js — Admin Panel (localStorage-based)
// =====================================================

const ADMIN_PASSWORD = atob('QXJ5YW4xMjM=');

function initAdmin() {
    const loginForm = document.getElementById('adminLoginForm');
    const loginSection = document.getElementById('adminLogin');
    const panelSection = document.getElementById('adminPanel');
    const saveBtn = document.getElementById('adminSaveBtn');
    const resetBtn = document.getElementById('adminResetBtn');
    const logoutBtn = document.getElementById('adminLogout');
    const loginError = document.getElementById('loginError');

    // Check if already logged in during session
    if (sessionStorage.getItem('adminAuth') === 'true') {
        showPanel();
    }

    // Login
    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const pw = document.getElementById('adminPassword').value;
            if (pw === ADMIN_PASSWORD) {
                sessionStorage.setItem('adminAuth', 'true');
                showPanel();
            } else {
                if (loginError) {
                    loginError.textContent = '❌ Incorrect password. Please try again.';
                    loginError.style.display = 'block';
                }
            }
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('adminAuth');
            if (loginSection) loginSection.style.display = 'flex';
            if (panelSection) panelSection.classList.remove('visible');
        });
    }

    // Save
    if (saveBtn) {
        saveBtn.addEventListener('click', saveMenu);
    }

    // Reset
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Reset all prices to defaults?')) {
                localStorage.removeItem('scoopSipMenu');
                renderAdminTable();
                showToast('✅ Menu reset to defaults!');
            }
        });
    }
}

function showPanel() {
    const loginSection = document.getElementById('adminLogin');
    const panelSection = document.getElementById('adminPanel');
    if (loginSection) loginSection.style.display = 'none';
    if (panelSection) panelSection.classList.add('visible');
    renderAdminTable();
}

function getDefaultMenu() {
    // We pull from the menu.js DEFAULT_MENU inline here for admin
    const saved = localStorage.getItem('scoopSipMenu');
    if (saved) return JSON.parse(saved);
    // Fallback - fetch from window if menu.js loaded
    if (window.DEFAULT_MENU) return window.DEFAULT_MENU;
    return [];
}

function renderAdminTable() {
    const tbody = document.getElementById('adminTableBody');
    if (!tbody) return;

    const menu = getDefaultMenu();
    if (menu.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--text-muted)">No menu data. Open menu.html first to initialize.</td></tr>';
        return;
    }

    const catLabels = { scoops: '🍦 Scoops', sundaes: '🍨 Sundaes', shakes: '🥤 Shakes', juices: '🍊 Juices', combos: '🎊 Combos' };

    tbody.innerHTML = menu.map(item => `
    <tr>
      <td>${item.emoji} ${item.name}</td>
      <td>${catLabels[item.category] || item.category}</td>
      <td>
        <input type="text" id="desc-${item.id}" value="${item.desc}" style="width:100%">
      </td>
      <td>
        <input type="number" id="price-${item.id}" value="${item.price}" min="0" style="width:80px">
      </td>
      <td>
        <input type="checkbox" id="active-${item.id}" checked title="Item visible">
      </td>
    </tr>
  `).join('');
}

function saveMenu() {
    const menu = getDefaultMenu();
    const updated = menu.map(item => {
        const priceEl = document.getElementById(`price-${item.id}`);
        const descEl = document.getElementById(`desc-${item.id}`);
        return {
            ...item,
            price: priceEl ? parseInt(priceEl.value) || item.price : item.price,
            desc: descEl ? descEl.value : item.desc,
        };
    });
    localStorage.setItem('scoopSipMenu', JSON.stringify(updated));
    showToast('✅ Menu saved successfully!');
}

function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

document.addEventListener('DOMContentLoaded', initAdmin);
