$(document).ready(function () {
    $('.tabs').tabs();
    $('select').formSelect();
    $('.loader').delay(1000).fadeOut();
});

var app = angular.module('app', []);

app.filter('getType', function () {
    return function (x) {
        switch (x) {
            case 'o':
                return 'Optional';
            case 'n':
                return "Net";
            case 'm':
                return "Mobile";
            case 'd':
                return "Data";
            case 'h':
                return "Health";
            case 'b':
                return "Business";
            case 'g':
                return "Gaming";
        }
    }
})


app.filter('getClass', function () {
    return function (x) {
        var className = "";
        if (x >= 4) {
            className = "Green";
        } else if (x >= 3) {
            className = "Blue";
        } else if (x >= 2) {
            className = "Orange";
        } else {
            className = "Grey";
        }
        return className;
    };
});

app.controller('gpaCtrl', function ($scope) {

    $scope.cgpa = 0.0;

    $scope.savedSubjects = localStorage.getItem('subjects');
    $scope.savedGPA = localStorage.getItem('cgpa');

    $scope.subjects = [
        {
            year: '1',
            sems: [{
                    sem: '1',
                    subs: [{
                        name: 'English for Social Sciences',
                        id: 'DELT 11212',
                        cd: 2,
                    }, {
                        name: 'Introduction to International Relations',
                        id: 'INTS 11215',
                        cd: 5,
                    }, {
                        name: 'Principles of Communication',
                        id: 'MACO 11215',
                        cd: 5,
                    }, {
                        name: 'Introduction to Sociology',
                        id: 'SOCI 11215',
                        cd: 5,
                    }]
                },
                {
                    sem: '2',
                    subs: [ {
                        name: 'Media History and Social Trends',
                        id: '12225',
                        cd: 5,
                    }, {
                        name: 'International and Regional Organizations',
                        id: 'INTS 12232',
                        cd: 2,
                    }, {
                        name: 'Sri Lanka Society',
                        id: 'SOCI 12225',
                        cd: 5,
                    }, {
                        name: 'Regional Studies Contemporary South Asia',
                        id: 'INTS 12223',
                        cd: 3,
                    }]
                }
            ]
        },
        {
            year: '2',
            sems: [{
                    sem: '3',
                    subs: [{
                        name: 'Classical Sociological Theory',
                        id: 'SOCI 21414',
                        cd: 4,
                    }, {
                        name: 'Priciples of Social Anthropology',
                        id: 'SOCI 21424',
                        cd: 4,
                    }, {
                        name: 'Sociology of Gender',
                        id: 'SOCI 21434',
                        cd: 4,
                    }, {
                        name: 'Sociology of Education',
                        id: 'SOCI 21454',
                        cd: 4,
                    }, {
                        name: 'Skill Development 1 - Information Technology for Sociology',
                        id: 'SOCI 21462',
                        cd: 2,
                    }]
                },
                {
                    sem: '4',
                    subs: [{
                        name: 'Effective Speaking',
                        id: 'DELT 22522',
                        cd: 2,
                    }, {
                        name: 'Basic Social Research Methods',
                        id: 'SOCI 22414',
                        cd: 4,
                    }, {
                        name: 'Crime, Deviance and Society',
                        id: 'SOCI 22424',
                        cd: 4,
                    }, {
                        name: 'Sociology of Sex and Reproductive Health',
                        id: 'SOCI 22434',
                        cd: 4,
                    }, {
                        name: 'Social Change',
                        id: 'SOCI 22444',
                        cd: 4,
                    }, {
                        name: 'Social Statistics',
                        id: 'SOCI 22452',
                        cd: 2,
                    }]
                }
            ]
        },
        {
            year: '3',
            sems: [{
                    sem: '5',
                    subs: [{
                        id: "SENG 31212",
                        name: "Software Quality",
                        cd: 2
                    }, {
                        id: "SENG 31232",
                        name: "Information Security",
                        cd: 2
                    }, {
                        id: "SENG 31212",
                        name: "Software Project Management",
                        cd: 2
                    }, {
                        id: "SENG 31252",
                        name: "Professional Practices",
                        cd: 2
                    }, {
                        id: "SENG 31262",
                        name: "Research Methods",
                        cd: 2
                    }, {
                        id: "SENG 31272",
                        name: "Internet of Things",
                        cd: 2,
                        type: 'o'
                    }, {
                        id: "SENG 31282",
                        name: "Computer Network Management",
                        cd: 2,
                        type: 'o'
                    }, {
                        id: "SENG 31292",
                        name: "Enterprise Information Systems",
                        cd: 2,
                        type: 'o'
                    }, {
                        id: "SENG 34213",
                        name: "Systems Development Project",
                        cd: 3
                    }, {
                        id: "SENG 34222",
                        name: "Software Process",
                        cd: 2
                    }, {
                        id: "SENG 31313",
                        name: "Advanced Web Applications Development",
                        cd: 3,
                        type: 'n'
                    }, {
                        id: "SENG 31323",
                        name: "Mobile Computing Technologies",
                        cd: 3,
                        type: 'm'
                    }, {
                        id: "SENG 31333",
                        name: "Business Intelligence and Management Support Systems",
                        cd: 3,
                        type: 'd'
                    }, {
                        id: "SENG 31343",
                        name: "Health Information Management",
                        cd: 3,
                        type: 'h'
                    }, {
                        id: "SENG 31353",
                        name: "Game Development Technology",
                        cd: 3,
                        type: 'g'
                    }, {
                        id: "SENG 31363",
                        name: "Business Systems Modelling and Optimization",
                        cd: 3,
                        type: 'b'
                    }]
                },
                {
                    sem: '6',
                    subs: [{
                        id: "SENG 32216",
                        name: "Internship",
                        cd: 6
                    }]
                }
            ]
        }, {
            year: '4',
            sems: [{
                    sem: '7',
                    subs: [{
                        name: 'Software Evolution',
                        id: 'SENG 41212',
                        cd: 2,
                    }, {
                        name: 'Software Metrics and Measurements',
                        id: 'SENG 41222',
                        cd: 2,
                    }, {
                        name: 'Digital Image Processing',
                        id: 'SENG 41233',
                        cd: 3,
                        type: 'o'
                    }, {
                        name: 'Advanced Databases',
                        id: 'SENG 41242',
                        cd: 2,
                        type: 'o'
                    }, {
                        name: 'Advanced Computer Networks',
                        id: 'SENG 41252',
                        cd: 2,
                        type: 'o'
                    }, {
                        name: 'Speech Interfaces',
                        id: 'SENG 41262',
                        cd: 2,
                        type: 'o'
                    }, {
                        name: 'Formal Methods',
                        id: 'SENG 41272',
                        cd: 2,
                        type: 'o'
                    }, {
                        id: "SENG 41283",
                        name: "Distributed and Cloud Computing",
                        cd: 3,
                        type: 'n'
                    }, {
                        id: "SENG 41293",
                        name: "Mobile Web Application Development",
                        cd: 3,
                        type: 'm'
                    }, {
                        id: "SENG 41303",
                        name: "Big Data Infrastructure",
                        cd: 3,
                        type: 'd'
                    }, {
                        id: "SENG 41313",
                        name: "Health Information Systems Design and Development",
                        cd: 3,
                        type: 'h'
                    }, {
                        id: "SENG 41323",
                        name: "Games Design, Artwork, and Programming",
                        cd: 3,
                        type: 'g'
                    }, {
                        id: "SENG 41333",
                        name: "Computer Based Operations Management",
                        cd: 3,
                        type: 'b'
                    }]
                },
                {
                    sem: '8',
                    subs: [{
                        name: 'Software Safety and Reliability',
                        id: 'SENG 42212',
                        cd: 2,
                    }, {
                        name: 'Usability Engineering',
                        id: 'SENG 42222',
                        cd: 2,
                        type: 'o'
                    }, {
                        name: 'Software Management',
                        id: 'SENG 42232',
                        cd: 2,
                        type: 'o'
                    }, {
                        name: 'Machine Learning',
                        id: 'SENG 42242',
                        cd: 2,
                        type: 'o'
                    }, {
                        name: 'Computer Graphics',
                        id: 'SENG 42252',
                        cd: 2,
                        type: 'o'
                    }, {
                        name: 'Software Engineering Research Project',
                        id: 'SENG 43216',
                        cd: 6,
                    }, {
                        id: "SENG 42273",
                        name: "Semantic Web and Ontological Engineering",
                        cd: 3,
                        type: 'n'
                    }, {
                        id: "SENG 42283",
                        name: "Mobile Networks",
                        cd: 3,
                        type: 'm'
                    }, {
                        id: "SENG 42293",
                        name: "Big Data Analytics",
                        cd: 3,
                        type: 'd'
                    }, {
                        id: "SENG 42303",
                        name: "Medical Imaging and Biomedial Signal Processing",
                        cd: 3,
                        type: 'h'
                    }, {
                        id: "SENG 42313",
                        name: "Advanced Topics in Game Design and Animation",
                        cd: 3,
                        type: 'g'
                    }, {
                        id: "SENG 42323",
                        name: "Business Process Engineering",
                        cd: 3,
                        type: 'b'
                    }]
                }
            ]
        }
    ];

    $scope.updateGPA = function updateGPA() {
        M.toast({
            html: 'Saving...',
            displayLength: 500,
            classes: 'indigo'
        })
        var tgpa = 0;
        var tcd = 0;
        for (i = 0; i < $scope.subjects.length; i++) {
            var year = $scope.subjects[i];
            var tygpa = 0;
            var tycd = 0;
            for (k = 0; k < year.sems.length; k++) {
                var sem = $scope.subjects[i].sems[k];
                var tsemGPA = 0;
                var tsemCD = 0;
                for (j = 0; j < sem.subs.length; j++) {
                    var sub = sem.subs[j];
                    if (sub.grade) {

                        tygpa += (sub.grade * sub.cd);
                        tycd += sub.cd;

                        tsemGPA += (sub.grade * sub.cd);
                        tsemCD += sub.cd;

                        tgpa += (sub.grade * sub.cd);
                        tcd += sub.cd;
                    }
                }
                sem.tCd = tsemCD;
                sem.semgpa = tsemGPA / tsemCD;
            }
            year.ygpa = tygpa / tycd;
        }
        $scope.cgpa = tgpa / tcd;
        localStorage.setItem('subjects', angular.toJson($scope.subjects));
        localStorage.setItem('cgpa', angular.toJson($scope.cgpa));
    }

    if ($scope.savedSubjects == undefined || ($scope.savedSubjects == null) || ($scope.savedSubjects == "undefined")) {

    } else {

        $scope.loadSubjects = JSON.parse($scope.savedSubjects);

        for (i = 0; i < $scope.subjects.length; i++) {
            var year = $scope.subjects[i];
            for (k = 0; k < year.sems.length; k++) {
                var sem = $scope.subjects[i].sems[k];
                for (j = 0; j < sem.subs.length; j++) {
                    sem.subs[j].grade = $scope.loadSubjects[i].sems[k].subs[j].grade;
                }
            }
        }
        $scope.updateGPA();
    }

    $scope.grades = [
        {
            name: 'A+',
            val: 4.000000000000001
        },
        {
            name: 'A',
            val: 4.0
        },
        {
            name: 'A-',
            val: 3.7
        },
        {
            name: 'B+',
            val: 3.3
        },
        {
            name: 'B',
            val: 3.0
        },
        {
            name: 'B-',
            val: 2.7
        },
        {
            name: 'C+',
            val: 2.3
        },
        {
            name: 'C',
            val: 2.0
        },
        {
            name: 'C-',
            val: 1.7
        },
        {
            name: 'D+',
            val: 1.3
        },
        {
            name: 'D',
            val: 1.0
        },
        {
            name: 'D-',
            val: 0.7
        },
        {
            name: 'E',
            val: 0.3
        },
        {
            name: '-',
            val: 0.0
        }
    ]

    $scope.reset = function reset() {
        localStorage.removeItem('subjects');
        localStorage.removeItem('cgpa');
        window.location.reload();
    }

});