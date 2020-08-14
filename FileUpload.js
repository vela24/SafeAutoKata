var app = angular.module('UploadApp', ['ngFileUpload'])

app.controller('MyController', function ($scope, Upload, $timeout) {
    $scope.collection = [{
        name: "Mark",
        date: new Date("03/12/2019"),
        driver: "Tad",
        trip: "12 miles"
    }];
    var makeNewData = function () {
        $scope.selectedEntry = {
            name: ""
        };
    $scope.uploadFiles = function (files) {
        $scope.SelectedFiles = files;
        if ($scope.SelectedFiles && $scope.SelectedFiles.length) {
            Upload.upload({
                url: '/Home/Upload',
                data: {
                    files: $scope.SelectedFiles

                }
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                })
            }, function (response) {
                if (response.status > 0) {
                    var errormsg = response.status + ':' + response.data;
                }
            }, function (d) {
                var element = angular.element(document.querySelector('#divprogress'));
                $scope.Progress = Math.min(100, parseInt(100.0 * d.loaded / d.total));
                element.html('<div style="width:' + $scope.Progress + '%">' + $scope.Progress + '%</div>');
            });
        }
    }
    })

