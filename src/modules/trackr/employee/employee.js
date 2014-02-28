define(['angular', 'modules/trackr/employee/controllers/controllers'], function(angular, controllers) {
    'use strict';
    var employee = angular.module('trackr.employee', []);

    employee.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('trackr.employee', {
                url: '/employee',
                views: {
                    'center@': {
                        templateUrl: '/src/modules/trackr/employee/partials/employee.tpl.html'
                    }
                }
            })
            .state('trackr.employee.self', {
                url: '/self',
                views: {
                    'center@': {
                        templateUrl: '/src/modules/trackr/employee/partials/self.tpl.html',
                        controller: 'trackr.employee.controllers.self'
                    }
                }
            });
    }]);

    controllers.init(employee);
    return employee;
});