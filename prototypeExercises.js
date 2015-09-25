var Student = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
};

Student.prototype = {
  name: function() {
    return this.firstName + " " + this.lastName;
  },
  enroll: function(course) {
    for(var i=0; i<this.courses.length; i++) {
      if(this.courses.conflictsWith(course)) { return "ERROR"; }
    }
    this.courses.push(course);
    course._addStudent(this);
  },
  courseLoad: function() {
    var output = {};
    for(var i = 0; i < this.courses.length; i++) {
      if(this.courses[i].department in output) {
        output[this.courses[i].deparment] += this.courses[i].credits;
      }
      else {
        output[this.courses[i].department] = this.courses[i].credits;
      }
    }
    return output;
  }
};

var Course = function(name, department, credits, timeBlock, days) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.timeBlock = timeBlock;
  this.days = days;
  this.students = [];
};

Course.prototype = {
  _addStudent: function(student) {
    this.students.push(student);
  },

  conflictsWith: function(course) {
    if(this.timeBlock !== course.timeBlock){
      return false;
    }
    else {
      for(var i=0; i<this.days.length; i++) {
        for(var j=0; j<course.days.length; j++) {
          if(this.days[i] === course.days[j]) { return true; }
        }
      }
      return false;
    }
  }
};
