$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var url = 'https://api.github.com/users/' + $('input.username').val() + '?access_token=6813f95e130cd31f076c3ea477470ba84d75cd72';

    var template = $('template').html();

    var failure = function() {
      $('.container').prepend("User not found") };

    var alwaysDo =  function() {
      $('input.username').val('');
      };

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));}).fail(failure()).always(alwaysDo());
  });
});



// $.get(url, function(info) {
//       $('.container').prepend(Mustache.render(template, info));
//     }).fail(function() {
//       $('.container').prepend("User not found")
//     }).always(function() {
//       $('input.username').val('');
//       });
//   });
// });