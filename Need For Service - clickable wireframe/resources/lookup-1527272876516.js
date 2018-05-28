(function(window, undefined) {
  var dictionary = {
    "a3be7b44-04e1-47ae-97aa-f6e243b86e0b": "LoginScreen",
    "0a1ba1dd-5ae5-4715-9e64-10dcc7cd4868": "feedbackScreen",
    "22c53330-f280-4461-aae2-aed8e9d288a1": "MainScreen",
    "9b8c1b48-89ed-49f7-b83c-b7a82ca2e12b": "MapScreen",
    "24d2c4b7-3edb-4ae0-8026-89cf56c269d1": "ServiceRequestScreen",
    "836e354e-4b55-4ee6-8705-3adced9270d5": "ServiceRequestsScreen",
    "97bf4c2a-596c-4276-b720-57b9120b8234": "serviceMainScreen",
    "1917b91b-74e2-4417-8a83-2ff747be999c": "addFriendScreen",
    "b2287db8-572b-454c-8f83-e768cc4aaf85": "priceListScreen",
    "e29db392-c09e-461b-aab8-96c061fccc68": "CarInfoServiceScreen",
    "5173cbe1-1ab2-4085-96de-2e294eb45639": "FriendsScreen",
    "16ef2bad-db66-43aa-b47e-a27cc3756f00": "settingsScreen",
    "2617835b-50ab-4b6d-8e96-736860a53e17": "CarsListScreen",
    "b6426b6e-4815-4799-a45f-dcff3e5ca4bc": "signUpScreen",
    "c51a54af-110c-410e-9202-6192cf5c720c": "CarInfoScreen",
    "1e02236d-b496-4c66-bfe8-0b76ad31c20b": "RateServiceScreen",
    "b1bf42bb-d9e0-41b2-b5dc-f19b5fc94082": "manageServicesScreen",
    "747fc3a1-cb07-47ee-a2aa-dc2801a9ac1a": "ServiceScreen",
    "df44422a-29a7-440f-a9b5-ddebcde14be3": "ForgotPasswordScreen",
    "ce3e85d6-f0d5-42d9-892f-0caa5f0fb32d": "ProfileScreen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "FirstScreen",
    "781733a8-e0bf-4108-ad03-212bdd511494": "loginTemplate",
    "e56e2d3c-3cca-473f-a072-32d3c9b3af1b": "serviceTemplate",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "cf6f0184-b84b-48ac-b1ac-7c6d626cc892": "MainTemplate",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);