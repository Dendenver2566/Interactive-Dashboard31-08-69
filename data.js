// ═══════════════════════════════════════════════════════════
// PSMIS Dashboard — Data Module
// ข้อมูลทั้งหมดจากเดิม + ฟังก์ชันโหลดข้อมูลจากภายนอก
// ═══════════════════════════════════════════════════════════

const DashboardData = (() => {

    // ── ข้อมูลอัตรากำลัง ──
    const workforceData = [
        { name: 'ตำรวจ', ข้าราชการ: 362829, ลูกจ้างประจำ: 749 },
        { name: 'ทหาร', ข้าราชการ: 496011, ลูกจ้างประจำ: 17790 },
        { name: 'พลเรือน', ข้าราชการ: 477098, ลูกจ้างประจำ: 24702 },
        { name: 'มหาวิทยาลัย', ข้าราชการ: 13640, ลูกจ้างประจำ: 2548 },
        { name: 'ครู/บุคลากร', ข้าราชการ: 454505, ลูกจ้างประจำ: 5573 },
    ];

    // ── ข้อมูลเงินเดือนและค่าจ้าง ──
    const salaryData = [
        { type: 'เงินเดือน รอบ 1', count: 11336, amount: 172.45 },
        { type: 'เงินเดือน รอบ 2', count: 1332560, amount: 49522.05 },
        { type: 'ค่าจ้างประจำ รอบ 1', count: 128, amount: 1.05 },
        { type: 'ค่าจ้างประจำ รอบ 2', count: 29056, amount: 985.03 },
        { type: 'กบข. รอบ 1', count: 9918, amount: 30.68 },
        { type: 'กบข. รอบ 2', count: 1233180, amount: 4541.02 },
        { type: 'กสจ. รอบ 1', count: 118, amount: 0.14 },
        { type: 'กสจ. รอบ 2', count: 25117, amount: 53.53 },
        { type: 'กชศ. ข้าราชการ', count: 194751, amount: 221.45 },
        { type: 'กชศ. ลูกจ้าง', count: 66, amount: 0.05 },
    ];

    // ── ข้อมูลทหารกองประจำการ ──
    const conscriptData = [
        { name: 'สป.กลาโหม', count: 1194, amount: 9.57 },
        { name: 'กองทัพบก', count: 104432, amount: 858.87 },
        { name: 'กองทัพเรือ', count: 18883, amount: 155.26 },
        { name: 'กองทัพอากาศ', count: 9188, amount: 74.32 },
        { name: 'บก.กองทัพไทย', count: 1289, amount: 10.39 },
    ];

    // ── ข้อมูลงบกลาง ──
    const budgetData = [
        { month: 'ต.ค.68',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 39476.68 },
        { month: 'พ.ย.68',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 73338.64 },
        { month: 'ธ.ค.68',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 107183.05 },
        { month: 'ม.ค.69',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 140911.26 },
        { month: 'ก.พ.69',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 174477.18 },
        { month: 'มี.ค.69',  งบประมาณ: 364288.75, จัดสรร: 273216.56, เบิกจ่าย: 208003.79 },
        { month: 'เม.ย.69',  งบประมาณ: 364288.75, จัดสรร: 273726.38, เบิกจ่าย: 241722.48 },
        { month: 'พ.ค.69',  งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 274726.38 },
        { month: 'มิ.ย.69',   งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 309681.64 },
        { month: 'ก.ค.69',   งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 343215.89 },
        { month: 'ส.ค.69',   งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 376764.03 },
    ];

    // ── ข้อมูลบำนาญ ──
    const pensionData = [
        { name:'เบี้ยหวัด', count:5941, amount:85.3 },
        { name:'บำเหน็จปกติ', count:95, amount:37.99 },
        { name:'บำนาญปกติ', count:913689, amount:28688.97 },
        { name:'บำนาญพิเศษ', count:8930, amount:89.18 },
        { name:'บำเหน็จตกทอด', count:3484, amount:530.6 },
        { name:'บำเหน็จลูกจ้าง', count:8, amount:4.59 },
        { name:'บำนาญตกทอด', count:111, amount:1.05 },
        { name:'บำเหน็จดำรงชีพ', count:6946, amount:1052.36 },
        { name:'บำนาญข้าราชการการเมือง', count:24, amount:0.33 },
        { name:'มาตรการพัฒนาและบริหารกำลังคนฯ', count:0, amount:0 },
        { name:'บำนาญพิเศษเหตุทุพพลภาพอาสาสมัคร', count:521, amount:8.91 },
        { name:'บำเหน็จพิเศษลูกจ้างตาย', count:0, amount:0 },
        { name:'บำเหน็จปกติลูกจ้างตาย', count:11, amount:12.33 },
        { name:'บำนาญพิเศษเหตุทุพพลภาพ', count:1037, amount:16.28 },
        { name:'บำนาญพิเศษอาสาสมัครตาย', count:1054, amount:14.96 },
        { name:'บำเหน็จรายเดือน', count:107139, amount:1899.42 },
        { name:'บำเหน็จพิเศษรายเดือน', count:1, amount:0.01 },
        { name:'บำเหน็จตกทอด (ผู้รับเบี้ยหวัด/บำเหน็จพิเศษรายเดือน)', count:285, amount:20.38 },
        { name:'บำเหน็จตกทอดค้ำประกัน', count:1543, amount:992.37 },
        { name:'บำเหน็จตกทอดค้ำประกันลูกจ้าง', count:72, amount:17.58 },
    ];

    // ── ข้อมูลหนังสือรับรอง ──
    const certData = [
        { name: 'กรมบัญชีกลาง',  รับเรื่อง: 3560, อนุมัติ: 3517 },
        { name: 'สถาบันการเงิน', รับเรื่อง: 2372, อนุมัติ: 2327 },
    ];

    // ── ข้อมูลเงินสงเคราะห์ ──
    const welfareData = [
        { label: 'อนุมัติจ่าย (ราย)',                               value: 0,     icon: '👤', color: '#1e40af', bg: 'var(--kpi-blue-bg)' },
        { label: 'เงินชดเชย (ล้านบาท)',                             value: 0,     icon: '💰', color: '#0891b2', bg: 'var(--kpi-teal-bg)' },
        { label: 'เงินดำรงชีพ (ล้านบาท)',                           value: 0,     icon: '🏠', color: '#059669', bg: 'var(--kpi-green-bg)' },
        { label: 'เงินชดเชยรพหว่างพักรักษาตัวที่ รพ. (ล้านบาท)',    value: 0, icon: '🏥', color: '#db2777', bg: 'var(--kpi-pink-bg)' },
    ];

    // ── Chart Palette ──
    const PALETTE = ['#1e40af', '#3b82f6', '#0ea5e9', '#38bdf8', '#7dd3fc'];

    // ── Number Formatter ──
    const FMT = new Intl.NumberFormat('th-TH', { maximumFractionDigits: 2 });

    // ── KPI Summary Calculations ──
    const getKpiSummary = (data) => {
        const d = data || { workforceData, salaryData, conscriptData, budgetData };
        return {
            totalWorkforce:  d.workforceData.reduce((a, row) => a + row.ข้าราชการ + row.ลูกจ้างประจำ, 0),
            totalSalary:     d.salaryData.reduce((a, row) => a + row.amount, 0),
            totalConscript:  d.conscriptData.reduce((a, row) => a + row.amount, 0),
            latestBudget:    d.budgetData[d.budgetData.length - 1].เบิกจ่าย,
        };
    };

    // ── Load JSON from URL ──
    const loadFromJSON = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to load JSON');
            return await response.json();
        } catch (err) {
            console.error('Error loading JSON:', err);
            return null;
        }
    };

    // ── Load Excel file (requires SheetJS/xlsx) ──
    const loadFromExcel = (file) => {
        return new Promise((resolve, reject) => {
            if (!window.XLSX) {
                reject(new Error('SheetJS library not loaded'));
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const workbook = XLSX.read(e.target.result, { type: 'array' });
                    const result = {};
                    workbook.SheetNames.forEach(name => {
                        result[name] = XLSX.utils.sheet_to_json(workbook.Sheets[name]);
                    });
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };

    // ── Topics configuration ──
    const topics = [
        { id: 't1', label: 'อัตรากำลัง ขรก./ลจ.',       iconKey: 'People' },
        { id: 't2', label: 'จ่ายตรงเงินเดือน ขรก./ลจ.', iconKey: 'Money' },
        { id: 't3', label: 'จ่ายตรงทหารกองประจำการ',     iconKey: 'Shield' },
        { id: 't4', label: 'การจ่ายงบกลาง',              iconKey: 'TrendUp' },
        { id: 't5', label: 'จ่ายตรงบำนาญและเงินอื่น',   iconKey: 'Heart' },
        { id: 't6', label: 'การออกหนังสือรับรอง',        iconKey: 'Doc' },
        { id: 't7', label: 'การจ่ายเงินสงเคราะห์',      iconKey: 'Gift' },
    ];

    // ── Pension dot colors ──
    const pensionDotColors = [
        '#1e40af', '#3b82f6', '#0ea5e9', '#38bdf8', '#10b981',
        '#db2777', '#7c3aed', '#f59e0b', '#94a3b8', '#ef4444',
        '#06b6d4', '#8b5cf6', '#f97316', '#14b8a6', '#ec4899',
        '#6366f1', '#84cc16', '#a855f7', '#22d3ee', '#f43f5e'
    ];

    return {
        workforceData,
        salaryData,
        conscriptData,
        budgetData,
        pensionData,
        certData,
        welfareData,
        PALETTE,
        FMT,
        topics,
        pensionDotColors,
        getKpiSummary,
        loadFromJSON,
        loadFromExcel,
    };
})();
