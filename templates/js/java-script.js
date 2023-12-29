$(function() {

    // https://stackoverflow.com/questions/7177029/getting-the-index-of-the-selected-item-in-jquery-auto-complete
    // https://api.jqueryui.com/autocomplete/#option-source

    // Generate array from Python list of lists
    // label -> item_pn; value -> location
    var item_bin_array = [
        {% for entry in bin_list %}
        {label:"{{ entry[0] }}", value:"{{ entry[1] }}" },
        {% endfor %}
    ];

    // Autocomplete form with filing out location field
    $( "#part_number" ).autocomplete({
        source: item_bin_array,
        select: function(event, ui) { $('#location').val(ui.item.value) ; }
    });
});
