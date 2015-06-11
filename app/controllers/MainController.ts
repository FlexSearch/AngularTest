module Controllers{
    export class MainController{
        message = "coming from main controller";
        constructor($scope,logService:LogService){
            $scope.vm = this;
            logService.log('Some log');
        }
    }
}
