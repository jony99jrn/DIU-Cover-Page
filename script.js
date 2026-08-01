window.addEventListener('DOMContentLoaded', () => {
  const formScreen = document.getElementById('formScreen');
  const previewScreen = document.getElementById('previewScreen');

  const generateBtn = document.getElementById('generateBtn');
  const editBtn = document.getElementById('editBtn');
  const downloadBtn = document.getElementById('downloadBtn');

  generateBtn.addEventListener('click', () => {
    const courseCode = document.getElementById('courseCode').value.trim() || 'MAT 101';
    const courseTitle = document.getElementById('courseTitle').value.trim() || 'MATHEMATICS 1';
    const topicName = document.getElementById('topicName').value.trim() || 'Continuity and Differentiability, Polynomial, Inequality, Radial and Exponent';

    const teacherName = document.getElementById('teacherName').value.trim() || 'Atia Sanjida Talukder';
    const teacherDesig = document.getElementById('teacherDesig').value.trim() || 'Lecturer';
    const teacherDept = document.getElementById('teacherDept').value.trim() || 'Computer Science and Engineering';

    const studentName = document.getElementById('studentName').value.trim() || 'Jony Roy';
    const studentId = document.getElementById('studentId').value.trim() || '262-15-952';
    const section = document.getElementById('section').value.trim() || '72_J';
    const semester = document.getElementById('semester').value.trim() || 'Summer 2026';
    const studentDept = document.getElementById('studentDept').value.trim() || 'CSE';

    const subDateVal = document.getElementById('subDate').value;

    document.getElementById('prevCourseCode').innerText = courseCode;
    document.getElementById('prevCourseTitle').innerText = courseTitle;
    document.getElementById('prevTopicName').innerText = topicName;

    document.getElementById('prevTeacherName').innerText = teacherName;
    document.getElementById('prevTeacherDesig').innerText = teacherDesig;
    document.getElementById('prevTeacherDept').innerText = teacherDept;

    document.getElementById('prevStudentName').innerText = studentName;
    document.getElementById('prevStudentId').innerText = studentId;
    document.getElementById('prevSection').innerText = section;
    document.getElementById('prevSemester').innerText = semester;
    document.getElementById('prevStudentDept').innerText = studentDept;

    if (subDateVal) {
      const [year, month, day] = subDateVal.split('-');
      document.getElementById('prevSubDate').innerText = `${day}/${month}/${year}`;
    } else {
      document.getElementById('prevSubDate').innerText = '02/08/2026';
    }

    formScreen.style.setProperty('display', 'none', 'important');
    previewScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
  });

  editBtn.addEventListener('click', () => {
    previewScreen.classList.add('hidden');
    formScreen.style.setProperty('display', 'flex', 'important');
  });

  downloadBtn.addEventListener('click', () => {
    const element = document.getElementById('coverPage');

    const options = {
      margin: 0,
      filename: 'DIU_Assignment_Cover_Page.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        scrollY: 0
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  });
});