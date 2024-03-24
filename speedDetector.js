// Program used to detect speed of a car and suspend the  vehicle if it exceeds the limit
function speedDetector (speed) {
    let maxSpeed = 100;
    let demerits = 5;
    let demeritPoints=1;
    let overspeed = speed-maxSpeed;
    let points =(overspeed/demerits);
    let excess = 90;
    let highspeed = maxSpeed + excess;

    if (speed<= maxSpeed) {
        console.log('The car is moving within required speed')
    }
    else if (speed >= maxSpeed) {
        console.log('License Suspended')
    }
    else if (speed > maxSpeed) {
     console.log('Points' , + points)
    }
}
//  Here we run  our function with different values for testing the drivers  behavior on the road
speedDetector()