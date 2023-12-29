$(function() {

    // Generate array from pythone list of lists
    var item_bin_array = [
        {% for entry in bin_list %}
        {label:"{{ entry[0] }}", idx:"{{ entry[1] }}" },
        {% endfor %}
    ];

    // Autocompleate form with filing out location field
    $( "#part_number" ).autocomplete({
        source: item_bin_array,
        select: function(event, ui) { $('#location').val(ui.item.idx) ; }
    });
});
