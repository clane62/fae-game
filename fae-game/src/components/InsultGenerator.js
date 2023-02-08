function InsultGenerator() {

  var verbArray = ["STINKY", 'SMELLY', "ROTTEN", "FUNKY", "FOUL", "FERAL"]
  var verb2ndArray = ["LAZY", "LUDICROUS", "IDIOTIC", "STUPID", "EMPTY-HEADED", "POINTLESS"]
  var animalArray = ["DONKEY", "EMU", "CHICKEN", "TURKEY", "LIZARD", "GULL", 'GOOSE', "MUPPET"]

  var insult1 = Math.floor(Math.random() * verbArray.length)
  var insult2 = Math.floor(Math.random() * verb2ndArray.length)
  var insult3 = Math.floor(Math.random() * animalArray.length)

  var insultOutput = verbArray[insult1] + ', ' + verb2ndArray[insult2] + ' ' + animalArray[insult3] + "!"
  // console.log(insultOutput)

  return (
    <section className="insultOutput">
      <p>{insultOutput}</p>
    </section>
  )
}

export default InsultGenerator