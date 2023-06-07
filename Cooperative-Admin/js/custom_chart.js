
 
    //bar charts
    var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Dairy", "Fruit", "veg", "Grain", "Protein", "Proces", "Bever","Snacks", "Ingred"],
      datasets: [{
        label: 'apples',
        data: [60, 19, 50, 17, 28, 66, 7,88,14],
        backgroundColor: "rgba(206,138,8,1)"
      }, 
      // {
      //   label: 'oranges',
      //   data: [30, 29, 5, 5, 20, 3, 10],
      //   backgroundColor: "rgba(136,177,13,1)"
      // }
    ]
    },options: { legend: { display: false } } 
  });
   
  var ctx = document.getElementById("myChart2").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Dairy", "Fruit", "veg", "Grain", "Protein", "Proces", "Bever","Snacks", "Ingred"],
      datasets: [{
        label: 'apples',
        data: [60, 19, 50, 17, 28, 66, 7,88,14],
        backgroundColor: "rgba(206,138,8,1)"
      }, 
      // {
      //   label: 'oranges',
      //   data: [30, 29, 5, 5, 20, 3, 10],
      //   backgroundColor: "rgba(136,177,13,1)"
      // }
    ]
   },options: { legend: { display: false } }
  });
  var ctx = document.getElementById("myChart3").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Dairy", "Fruit", "veg", "Grain", "Protein", "Proces", "Bever","Snacks", "Ingred"],
      datasets: [{
        label: 'apples',
        data: [60, 19, 50, 17, 28, 66, 7,88,14],
        backgroundColor: "rgba(206,138,8,1)"
      }, 
      // {
      //   label: 'oranges',
      //   data: [30, 29, 5, 5, 20, 3, 10],
      //   backgroundColor: "rgba(136,177,13,1)"
      // }
    ]
   },options: { legend: { display: false } }
  });
  
  var ctx = document.getElementById("myChart4").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7","Category 8", "Category 9", "Category 10"],
      datasets: [{
        label: 'apples',
        data: [60, 19, 50, 17, 28, 66, 7,88,14,80],
        backgroundColor: "rgba(206,138,8,1)"
      }, 
      // {
      //   label: 'oranges',
      //   data: [30, 29, 5, 5, 20, 3, 10],
      //   backgroundColor: "rgba(136,177,13,1)"
      // }
    ]
   },options: { legend: { display: false } }
  });
  var ctx = document.getElementById("myChart5").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7","Category 8", "Category 9", "Category 10"],
      datasets: [{
        label: 'apples',
        data: [60, 19, 50, 17, 28, 66, 7,88,14,70],
        backgroundColor: "rgba(206,138,8,1)"
      }, 
      // {
      //   label: 'oranges',
      //   data: [30, 29, 5, 5, 20, 3, 10],
      //   backgroundColor: "rgba(136,177,13,1)"
      // }
    ]
   },options: { legend: { display: false } }
  });
 
      //pie chart
      var ctxP = document.getElementById("pieChart").getContext('2d');
      var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
          labels: ["H7 Free Products (30%)", "H7 Products (70%)" ],
          datasets: [{
            data: [300, 50],
            backgroundColor: ["#DF8107", "#88B10D"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
          }]
        },
        options: {
          responsive: true,
          legend: {
            position: 'right',
            display: false
          }
        }
      });
    var ctxP = document.getElementById("pieChart1").getContext('2d');
      var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
          labels: ["Unwanted (60%)", "Watch (40%)" ],
          datasets: [{
            data: [300, 50 ],
            backgroundColor: ["#DF8107", "#46BFBD"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
          }]
        },
        options: {
          responsive: true,
          legend: {
            display: false
            
            
          }
        }
      });
  
  
  
      $(document).ready(function(){
    
      if ($(window).width() < 700){
          alert()
          var ctxP = document.getElementById("pieChart").getContext('2d');
            var myPieChart = new Chart(ctxP, {
              type: 'pie',
              data: {
                labels: ["H7 Free Products (30%)", "H7 Products (70%)" ],
                datasets: [{
                  data: [300, 50],
                  backgroundColor: ["#88B10D","#DF8107"],
                  hoverBackgroundColor: ["#88B10D", "#DF8107"]
                }]
              },
              options: {
                responsive: true,
                legend: {
                  position: 'bottom',
                  display: false
                }
              }
            });
            var ctxP = document.getElementById("pieChart1").getContext('2d');
      var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
          labels: ["Unwanted (60%)", "Watch (40%)" ],
          datasets: [{
            data: [300, 50 ],
            backgroundColor: ["#DF8107", "#46BFBD"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
          }]
        },
        options: {
          responsive: true,
          legend: {
            position: 'bottom', 
            display: false
            
          }
        }
      });
  
  
  
  
      }
      
      
  });
      
 