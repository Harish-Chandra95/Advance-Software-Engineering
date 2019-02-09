
describe("Validatelogin", function() {
  var scope;

  beforeEach(angular.mock.module("Validlogin"));
  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('Validatelogin', {$scope: scope});
  }));

  it("Check for the Username and Password if they are empty", function() {

    scope.Valid('','');
    expect(scope.temp).toEqual("Username and Password cannot be empty");
  });


  it("Check if Username is empty", function() {

    scope.Valid('','Sindhuja');
    expect(scope.temp).toEqual("Username cannot be empty");
  });

  it("Check if  Password is empty", function() {

    scope.Valid('Ratnavalli','');
    expect(scope.temp).toEqual("Password cannot be empty");
  });

});
