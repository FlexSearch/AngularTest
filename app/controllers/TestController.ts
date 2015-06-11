module Controllers{
    export class TestController{
        message = "From Test controller";
        constructor($scope){
            $scope.vm = this;
        }
    }
}
