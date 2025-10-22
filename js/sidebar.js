// عنصر المحتوى الرئيسي
const appContent = document.getElementById('app-content');

// ===================================
// 1. تعريف وظائف عرض المحتوى (VIEWS)
// ===================================

// وظيفة لعرض عنوان ومحتوى بأسلوب موحد
function createContentView(title, subtitle, formula, description, structureExample) {
    const structureHtml = structureExample ? `
        <div class="structure-example">
            <p class="structure-title">مثال على التركيب:</p>
            <code class="structure-code">
                ${structureExample}
            </code>
        </div>
    ` : '';

    return `
        <h1 class="page-title">${title}</h1>
        <h2 class="page-subtitle">${subtitle}</h2>
        <div class="formula-box">
            <p class="formula-text">الصيغة العامة: ${formula}</p>
        </div>
        <div class="content-text">
            <p>${description}</p>
        </div>
        ${structureHtml}
    `;
}

function alkanesView() {
    return createContentView(
        'الألكانات (Alkanes)',
        'مركبات هيدروكربونية مشبعة',
        'CₙH₂ₙ₊₂',
        'هي أبسط أنواع الهيدروكربونات، وتتميز بوجود روابط تساهمية أحادية فقط بين ذرات الكربون. تُعرف بأنها مركبات مشبعة وغير نشطة نسبياً وتستخدم كوقود. تتبع الألكانات سلسلة متجانسة حيث يزيد طول السلسلة بزيادة عدد ذرات الكربون.',
        'CH₃-CH₂-CH₃ (البروبان)'
    );
}

function alkenesView() {
    return createContentView(
        'الألكينات (Alkenes)',
        'مركبات هيدروكربونية غير مشبعة',
        'CₙH₂ₙ',
        'تتميز بوجود رابطة تساهمية ثنائية واحدة على الأقل بين ذرتي كربون. هذا يجعلها أكثر نشاطاً من الألكانات، وتخضع بشكل رئيسي لتفاعلات الإضافة. تظهر الألكينات ظاهرة التصاوغ الهندسي بسبب عدم إمكانية الدوران حول الرابطة الثنائية.',
        'CH₂=CH₂ (الإيثين أو الإيثيلين)'
    );
}

function alkynesView() {
    return createContentView(
        'الألكاينات (Alkynes)',
        'مركبات هيدروكربونية غير مشبعة',
        'CₙH₂ₙ₋₂',
        'تتميز بوجود رابطة تساهمية ثلاثية واحدة على الأقل بين ذرتي كربون. هي شديدة النشاط وتستخدم بشكل شائع في عمليات اللحام (مثل الأسيتيلين). تكون الزوايا بين الروابط 180 درجة حول ذرة الكربون ذات الرابطة الثلاثية.',
        'CH≡CH (الإيثاين أو الأسيتيلين)'
    );
}

function aromaticView() {
    return createContentView(
        'المركبات الأروماتية',
        'مركبات حلقية مستقرة',
        'C₆H₆ (للبنزين)',
        'هي مركبات حلقية تتميز بحالة خاصة من الاستقرار بسبب ظاهرة الرنين (delocalized electrons). أشهر مثال هو البنزين، وتفاعلاتها الرئيسية هي تفاعلات الاستبدال الكهربائي المحب (Electrophilic Substitution). تتبع قاعدة هوكل حيث تحتوي على 4n+2 إلكترون باي.',
        'C₆H₆ (بنزين) - حلقة سداسية مع إلكترونات باي غير موضعية'
    );
}

function alcoholsView() {
    return createContentView(
        'الكحولات (Alcohols)',
        'تحتوي على مجموعة الهيدروكسيل',
        'R-OH',
        'تتميز بوجود مجموعة الهيدروكسيل OH مرتبطة بذرة كربون مشبعة. هذه المجموعة تمنح الكحولات قطبية عالية وقدرة على تكوين روابط هيدروجينية، مما يرفع من درجة غليانها. يمكن تصنيفها إلى كحولات أولية وثانوية وثالثية حسب عدد مجموعات الألكيل المرتبطة بذرة الكربون الحاملة لمجموعة OH.',
        'CH₃CH₂OH (الإيثانول)'
    );
}

function ethersView() {
    return createContentView(
        'الإيثرات (Ethers)',
        'تحتوي على ذرة أكسجين بين مجموعتي ألكيل',
        'R-O-R\'',
        'مركبات تحتوي على ذرة أكسجين مرتبطة بمجموعتي ألكيل أو أريل. هي مركبات أقل قطبية من الكحولات ولا تكون روابط هيدروجينية بين جزيئاتها، وغالباً ما تستخدم كمذيبات ممتازة. يمكن أن تكون متماثلة (مجموعتا ألكيل متشابهتان) أو غير متماثلة.',
        'CH₃CH₂-O-CH₂CH₃ (ثنائي إيثيل إيثر)'
    );
}

function carbonylView() {
    return createContentView(
        'مركبات الكربونيل',
        'الألدهيدات والكيتونات',
        'R-C=O',
        'تتميز بوجود مجموعة الكربونيل C=O. إذا كانت المجموعة عند طرف السلسلة فهي ألدهيد، وإذا كانت في المنتصف فهي كيتون. هذه المجموعة قطبية جداً وتخضع لتفاعلات الإضافة النيوكليوفيلية. الألدهيدات أكثر نشاطاً من الكيتونات في التفاعلات بسبب قلة الحجم الفراغي.',
        'R-CHO (ألدهيد) | R-CO-R\' (كيتون)'
    );
}

function carboxylicView() {
    return createContentView(
        'الأحماض الكربوكسيلية',
        'تحتوي على مجموعة الكربوكسيل',
        'R-COOH',
        'تتميز بوجود مجموعة الكربوكسيل COOH. هي أحماض ضعيفة نسبياً، لكنها قادرة على تكوين روابط هيدروجينية ثنائية قوية، مما يمنحها أعلى درجات غليان بين معظم المجموعات الوظيفية. تتفاعل مع القواعد لتكون الأملاح، ومع الكحولات لتكون الإسترات.',
        'CH₃COOH (حمض الإيثانويك أو الأسيتيك)'
    );
}

function derivativesView() {
    return createContentView(
        'مشتقات الأحماض الكربوكسيلية',
        'الإسترات، الأميدات، الأمينات',
        'R-C=O-X',
        'تشمل الإسترات (ذات الرائحة العطرية) والأميدات (المكونة من الأحماض والأمينات). هذه المشتقات تتكون غالباً عبر تفاعلات تكاثف، وتمتلك خصائص مختلفة تعتمد على المجموعة المغادرة X. الإسترات معروفة بروائحها الفواكهية، بينما الأميدات مهمة في الكيمياء الحيوية.',
        'R-COO-R\' (إستر) | R-CONH₂ (أميد)'
    );
}

function notFoundView() {
    return `
        <div class="not-found">
            <h1 class="error-title">خطأ 404</h1>
            <p class="error-text">لم يتم العثور على هذا الموضوع الكيميائي.</p>
            <a href="#/alkanes" class="back-button">اذهب إلى الألكانات</a>
        </div>
    `;
}

// 2. تعريف المسارات (ROUTES)
const routes = {
    '/alkanes': alkanesView,
    '/alkenes': alkenesView,
    '/alkynes': alkynesView,
    '/aromatic': aromaticView,
    '/alcohols': alcoholsView,
    '/ethers': ethersView,
    '/carbonyl': carbonylView,
    '/carboxylic': carboxylicView,
    '/derivatives': derivativesView,
    '404': notFoundView
};

// 3. وظيفة التوجيه الرئيسية (ROUTING FUNCTION)
function renderView() {
    let path = window.location.hash.slice(1);
    
    if (path === '' || path === '/') {
        path = '/alkanes';
        window.location.hash = path; 
        return;
    }

    if (!path.startsWith('/')) {
        path = '/' + path;
    }

    const viewFunction = routes[path] || routes['404'];
    appContent.innerHTML = viewFunction();
    appContent.classList.add('fade-in');
    
    updateActiveLink(path.slice(1));
    
    // إزالة animation class بعد انتهاءها
    setTimeout(() => {
        appContent.classList.remove('fade-in');
    }, 500);
}

// 4. وظيفة تحديث حالة الرابط النشط
function updateActiveLink(currentPath) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active'); 
    });

    const activeLink = document.querySelector(`.nav-link[data-path="${currentPath}"]`);
    if (activeLink) {
        activeLink.classList.add('active'); 
    }
}

// 5. تهيئة المستمعات للأحداث
window.addEventListener('hashchange', renderView);
window.addEventListener('load', renderView);