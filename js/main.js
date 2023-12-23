$(document).ready(function () {
    // Show loader
    let loader = "asdsd"
    var table = $('#example').DataTable({
        lengthMenu: [20, 40, 60, 80, 100],
        lengthChange: true,
        paging: true,
        pageLength: 20,

        // pageLength: '10',
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print',
            {
                text: "Export Large Data <span class=\"loading_spinner_ex initial_hide\"><i class=\"fa fa-spinner fa-spin\"></i></span>",
                // text: 'Export Large Data',
                action: function (e, dt, node, config) {
                    // Trigger the export function here
                    var btn = $(node);
                    var originalText = btn.html();
                    btn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Exporting...');

                    setTimeout(function () {
                        // Your export logic here
                        console.log(loader);
                        console.log('Exporting large data...');

                        // Reset the button state
                        btn.html(originalText);
                    }, 2000); // Replace with your actual export logic duration
                }
            }
        ],
        // buttons: [
        //     {
        //         extend: 'copyHtml5',
        //         exportOptions: {
        //             columns: [0, ':visible']
        //         }
        //     },
        //     {
        //         extend: 'excelHtml5',
        //         exportOptions: {
        //             columns: ':visible'
        //         }
        //     },
        //     {
        //         extend: 'pdfHtml5',
        //         exportOptions: {
        //             columns: [0, 1, 2, 5]
        //         }
        //     },
        //     'colvis'
        // ],
        serverSide: true,// You may set it to false if you are not using server-side processing
        processing: true,
        // Other DataTable options go here
        ajax: {
            url: "http://localhost/blog/api",
            type: "GET"
        },
        // "data": data,
        columns: [
            { data: 'sl' },
            { data: 'name' },
            { data: 'position' },
            { data: 'salary' },
            { data: 'start_date' },
            { data: 'office' },
            { data: 'extn' },
        ],
        // rowCallback: function (row, data, index) {
        //     var api = this.api();
        //     var startIndex = api.page() * api.page.len();
        //     var counter = startIndex + index + 1;
        //     $('td:eq(0)', row).html(counter);
        // }

    });

    // Hide loader when data is loaded
    table.on('draw', function () {
        // Hide loader after DataTable is drawn
        // You can use your own logic to hide the loader
        $("#example_processing").hide();
    });
});
