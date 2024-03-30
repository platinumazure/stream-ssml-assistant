Add-Type -AssemblyName System.Speech
$speechSynthesizer = New-Object -TypeName System.Speech.Synthesis.SpeechSynthesizer

$speechSynthesizer.SelectVoice('Microsoft Susan')
$speechSynthesizer.Rate = 3;

$speechSynthesizer.Speak('Hello, world!')
$speechSynthesizer.Speak('What''s up?')

Write-Output 'Done!'