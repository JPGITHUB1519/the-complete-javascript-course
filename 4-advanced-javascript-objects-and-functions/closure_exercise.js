/*
==========================================================================
Closure Exercise
==========================================================================
*/

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
        console.log('Hello ' + name + ', what do you do?');
    }
 }
}

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jean');

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Marcos');