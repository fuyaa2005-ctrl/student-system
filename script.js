class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;       // مصفوفة تحتوي على درجات 3 مواد
    this.attendance = attendance; // نسبة الحضور
  }

  // 2. دوال التحليل الأكاديمي (Methods)
  calculateAverage() {
    const total = this.grades.reduce((acc, curr) => acc + curr, 0);
    return total / this.grades.length;
  }

  getGradeLabel(avg) {
    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    if (avg >= 60) return 'D';
    if (avg >= 50) return 'E';
    return 'F';
  }

  getFinalStatus() {
    const avg = this.calculateAverage();
    if (avg >= 50 && this.attendance >= 75) {
      return "ناجح";
    } else {
      return "يحتاج مراجعة";
    }
  }
}

// 3. نظام تشغيل الجامعة (Objects Array)
const studentsList = [
  new Student(101, "أحمد محمود", [85, 90, 88], 90),
  new Student(102, "سارة يوسف", [42, 45, 48], 80),
  new Student(103, "عمر خالد", [40, 41, 42], 70),
  new Student(104, "مريم حسن", [60, 65, 70], 85)
];

// 4. لجنة الرأفة (Array Methods)
const strugglingStudents = studentsList.filter(student => {
  const avg = student.calculateAverage();
  return avg >= 40 && avg <= 49;
});

const boostedAverages = strugglingStudents.map(student => {
  return student.calculateAverage() + 5;
});

const totalBoostedAverage = boostedAverages.reduce((acc, curr) => acc + curr, 0);

const count = strugglingStudents.length;
const averageAfterBoost = count > 0 ? (totalBoostedAverage / count) : 0;

// 5. المخرجات (Console Logging)
console.log("=== تقارير الطلاب العامة ===");
studentsList.forEach(student => {
  const avg = student.calculateAverage();
  const label = student.getGradeLabel(avg);
  const status = student.getFinalStatus();
  console.log(`الاسم: ${student.name} | المتوسط: ${avg.toFixed(2)} | التقدير: ${label} | النتيجة: ${status}`);
});

console.log("\n=== الطلاب الذين شملتهم درجات الرأفة ===");
console.log(strugglingStudents.map(s => ({
  رقم_الجلوس: s.id,
  الاسم: s.name,
  المتوسط_الاصلي: s.calculateAverage().toFixed(2),
  المتوسط_بعد_الرأفة: (s.calculateAverage() + 5).toFixed(2)
})));

console.log("\n=== تحليل لجنة الرأفة ===");
console.log(`المتوسط العام للطلاب المتعثرين بعد التعديل: ${averageAfterBoost.toFixed(2)}`);
