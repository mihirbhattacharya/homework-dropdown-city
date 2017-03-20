$(document).ready(function(){

      var list = ['Select a City', 'NYC', 'SF', 'LA', 'ATX', 'SYD']

        list.forEach(function (item) {
          var option = $('<option>').attr('value',item).text(item)
          $('select').append(option);

      $('#city-type').change(function() {
          var select = $(this).val()

      if(select === "NYC") {
        $('body').attr('class','nyc')
        }

      else if (select === "SF") {
        $('body').attr('class','sf')
        }

      else if (select === "LA") {
        $('body').attr('class','la')
      }

      else if (select=== "ATX") {
        $('body').attr('class','austin')
      }

      else if (select === "SYD") {
          $('body').attr('class','sydney')
        }
      });
    });
});
