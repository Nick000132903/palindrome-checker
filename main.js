function verify(){
    const input = document.getElementById('input').value

    if(input == ""){
        alert("Invalid value! Please type something in the text box.")
    } else{
        let typedSentence = input.replaceAll(/[^a-z A-Z 0-9]/g, '')
        typedSentence = typedSentence.replaceAll(' ', '')

        const normalSentence = typedSentence.toLowerCase()
        
        typedSentence = typedSentence.split('').reverse().join('').toLowerCase()
        if(typedSentence == normalSentence){
            document.getElementById('exit').innerText = "It's a palindrome!"
        } else{
            document.getElementById('exit').innerText = "It's not a palindrome!"
        }
    }
}