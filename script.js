
const input = document.querySelector('input[type="checkbox"]');
const dashboards = document.querySelectorAll('.dashboards');
const dashboardUpperSection = document.querySelector('.upper-section');
const lowerDashboard = document.querySelectorAll('.main-dashboard');

const modeText = document.querySelector("body > header > section > div.upper-section > div.title-side-btn > p");

input.addEventListener('change', function () {
    if (input.checked) {

        document.body.style.background = '#1D2029';
        document.body.style.color = "white";
        dashboardUpperSection.style.background = "#20222F";


        //upper dashboard
        const dashboardList = [...dashboards];
        dashboardList.forEach(x => {
            x.style.background = "#252B43";

        })

        // Lower dashboard
        const dashboardLower = [...lowerDashboard];

        dashboardLower.forEach(x => {
            x.style.background = "#20222F"
        })

        modeText.innerText = "Normal Mode"
    }
    else if (!input.checked) {

        document.body.style.background = 'white';
        document.body.style.color = "black";
        dashboardUpperSection.style.background = "#F0F3FA";

        const dashboardList = [...dashboards];
        dashboardList.forEach(x => {
            x.style.background = "#F0F3FA";

        })

        const dashboardLower = [...lowerDashboard];

        dashboardLower.forEach(x => {
            x.style.background = "#F0F3FA"
        })
        modeText.innerText = "Dark Mode"
    }
})