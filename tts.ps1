param (
    [string[]]$allArgs
)

Add-Type -AssemblyName System.Speech
$speechSynthesizer = New-Object -TypeName System.Speech.Synthesis.SpeechSynthesizer

$speechSynthesizer.SelectVoice('Microsoft Susan')
$speechSynthesizer.Rate = 3;

$prompt = $allArgs -join " "

Write-Output "TTS prompt: ""$prompt"""

$speechSynthesizer.Speak($prompt)