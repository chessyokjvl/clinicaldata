// assets/navbar.js
function loadNavbar(level, activePage) {
    const navContainer = document.getElementById('navbar-container');
    if (!navContainer) return;

    let linksHTML = '';

    if (level === 'executive') {
        linksHTML = `
            <a href="overview.html" class="nav-btn ${activePage === 'overview' ? 'active' : ''}">📊 ภาพรวม 5 อันดับกลุ่มโรค</a>
            <a href="drug_policy.html" class="nav-btn ${activePage === 'drug_policy' ? 'active' : ''}">💊 นโยบายสารเสพติด (F1x)</a>
        `;
    } else if (level === 'internal') {
        linksHTML = `
            <a href="overall_stats.html" class="nav-btn ${activePage === 'overall_stats' ? 'active' : ''}">📈 สถิติภาพรวม รพ.</a>
            <a href="prevalence.html" class="nav-btn ${activePage === 'prevalence' ? 'active' : ''}">🏥 ความชุกและสถิติรายอำเภอ</a>
            <a href="domicile.html" class="nav-btn ${activePage === 'domicile' ? 'active' : ''}">📍 ภูมิลำเนาผู้ป่วย (OPD/IPD)</a>
        `;
    }

    linksHTML += `<a href="../index.html" class="nav-btn" style="margin-left: auto; border-color: transparent;">🏠 กลับหน้าหลัก</a>`;
    navContainer.innerHTML = `<div class="main-nav">${linksHTML}</div>`;
}
