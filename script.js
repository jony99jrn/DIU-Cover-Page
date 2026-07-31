document.addEventListener('DOMContentLoaded', () => {
  const formScreen = document.getElementById('formScreen');
  const previewScreen = document.getElementById('previewScreen');

  const generateBtn = document.getElementById('generateBtn');
  const editBtn = document.getElementById('editBtn');
  const downloadBtn = document.getElementById('downloadBtn');

  // Generate Button Click
  generateBtn.addEventListener('click', () => {
    // Read values or use default DIU placeholders
    const courseCode = document.getElementById('courseCode').value.trim() || 'CSE 311';
    const courseTitle = document.getElementById('courseTitle').value.trim() || 'Database Management System';
    const topicName = document.getElementById('topicName').value.trim() || 'Relational Algebra & SQL Query Optimization';
    
    const teacherName = document.getElementById('teacherName').value.trim() || 'Dr. John Doe';
    const teacherDesig = document.getElementById('teacherDesig').value.trim() || 'Assistant Professor';
    const teacherDept = document.getElementById('teacherDept').value.trim() || 'Computer Science and Engineering';

    const studentName = document.getElementById('studentName').value.trim() || 'Jane Smith';
    const studentId = document.getElementById('studentId').value.trim() || '211-15-1234';
    const section = document.getElementById('section').value.trim() || 'A';
    const semester = document.getElementById('semester').value.trim() || 'Spring 2026';
    const studentDept = document.getElementById('studentDept').value.trim() || 'CSE';
    
    const subDateVal = document.getElementById('subDate').value;

    // Apply values to preview elements
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
      document.getElementById('prevSubDate').innerText = '05/07/2026';
    }

    // Switch View
    formScreen.classList.add('hidden');
    previewScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
  });

  // Edit Button Click
  editBtn.addEventListener('click', () => {
    previewScreen.classList.add('hidden');
    formScreen.classList.remove('hidden');
  });

  // Download PDF Button Click
  downloadBtn.addEventListener('click', () => {
    const element = document.getElementById('coverPage');
    
    const options = {
      margin: 0,
      filename: 'DIU_Assignment_Cover_Page.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  });
});
