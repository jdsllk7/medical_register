const med_data = document.querySelector('.med_data');
$(document).ready(function () {

  $('.sidenav').sidenav();
  $('.tooltipped').tooltip();
  $('select').formSelect();
  $('.collapsible').collapsible();
  var elem = document.querySelector('.collapsible.expandable');
  var instance = M.Collapsible.init(elem, {
    accordion: false
  });
  $('input#input_text, textarea#textarea1').characterCounter();

  var current_page = window.location.href;

  var position = current_page.search("notFound..");
  if (position != -1) {
    var text = '<span class="white-text text-darken-1"><b>Medical ID Not Found <i class="material-icons">error_outline</i></b></span>';
    M.toast({ html: text });
  }

});




// Add medical data
const renderMed_id = (data, id) => {
  if (med_data) {
    console.log(data);
    html = `
          <ul class="col s12 collection">
            <li class="collection-header grey-text text-darken-2"><h6><b>Time Recorded: </b> ${data.time_ago} </h6></li>
            <li class="collection-item">Heartbeat: ${data.beat} </li>
            <li class="collection-item">Blood Pressure: ${data.bp} </li>
          </ul>
        `;
    med_data.innerHTML += html;
  }
};