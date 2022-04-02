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
                        id: "SOCI 31414",
                        name: "Advanced Sociological Theory",
                        cd: 4
                    }, {
                        id: "SOCI 31424",
                        name: "Rural Sociology",
                        cd: 4
                    }, {
                        id: "SOCI 31434",
                        name: "Urban Sociology",
                        cd: 4
                    }, {
                        id: "SOCI 31454",
                        name: "Political Sociology",
                        cd: 4
                    }, {
                        id: "SOCI 31462",
                        name: "Skill Development II: Writing Synopsis",
                        cd: 2
                    }]
                },
                {
                    sem: '6',
                    subs: [{
                        id: "DELT 32522",
                        name: "Advanced Writing and Grammar",
                        cd: 2
                    }, {
                        name: 'Advanced Social Research Methods',
                        id: 'SOCI 32414',
                        cd: 4,
                    }, {
                        name: 'Social Psychology',
                        id: 'SOCI 32424',
                        cd: 4,
                    }, {
                        name: 'Industrial Sociology',
                        id: 'SOCI 32434',
                        cd: 4,
                    }, {
                        name: 'Internship',
                        id: 'SOCI 32454',
                        cd: 4,
                    }]
                }
            ]
        }, {
            year: '4',
            sems: [{
                    sem: '7',
                    subs: [{
                        name: 'Research Skills / English Skills for Special Degress',
                        id: 'DELT 41512',
                        cd: 2,
                    }, {
                        name: 'Sociology of Communication',
                        id: 'SOCI 41414',
                        cd: 4,
                    }, {
                        name: 'Development Sociology',
                        id: 'SOCI 41424',
                        cd: 4,
                    }, {
                        name: 'Social Problems and Modern Society',
                        id: 'SOCI 41434',
                        cd: 4,
                    }, {
                        name: 'Skill Development III',
                        id: 'SOCI 41452',
                        cd: 2,
                    }]
                },
                {
                    sem: '8',
                    subs: [{
                        name: 'Development Planning, Monitoring and Evaluation',
                        id: 'SOCI 42414',
                        cd: 4,
                    }, {
                        name: 'Sri Lankan Society and Culture',
                        id: 'SOCI 42424',
                        cd: 4,
                    }, {
                        name: 'Independent Dissertation',
                        id: 'SOCI 42448',
                        cd: 8,
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