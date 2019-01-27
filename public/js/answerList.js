routing.directive("answerList", function () {

  return function (scope, element, attrs) {

      var data = scope[attrs["answerList"]];
      console.log(data);
      if (angular.isArray(data.answers)) {
          var ulElem = angular.element("<ul>");
          element.append(ulElem);
          for (var i = 0; i < data.answers.length; i++) {
              var liElem = angular.element('<li>');
              liElem.append(angular.element('<p>').text(data.answers[i].city));
              ulElem.append(liElem);
          }
      }
  }

});
