
const generateCordinate = (max, min)=>{
        return Math.floor(
          Math.random() * (max - min + 1) + min
        )
}

const getDroneData = ()=>{
   return [
    {
        name:"Fire Scout",
        xPosition:generateCordinate(100,0),
        yPosition:generateCordinate(100,0),
        detectionRange:3
    },
    {
        name:"Reaper",
        xPosition:generateCordinate(100,0),
        yPosition:generateCordinate(100,0),
        detectionRange:9
    }
]

}

module.exports = getDroneData