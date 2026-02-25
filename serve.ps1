# Satyanarayan Ice Cream — Local Web Server
# Run this script to start a local server and open the website in Edge

$port = 5500
$root = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "Server running at http://localhost:$port/" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow

# Open Edge
Start-Process "msedge" "http://localhost:$port/index.html"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $localPath = $request.Url.LocalPath -replace '/', '\'
    if ($localPath -eq '\') { $localPath = '\index.html' }

    $filePath = Join-Path $root $localPath.TrimStart('\')

    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        $mimeTypes = @{
            '.html' = 'text/html; charset=utf-8'
            '.css'  = 'text/css; charset=utf-8'
            '.js'   = 'application/javascript; charset=utf-8'
            '.png'  = 'image/png'
            '.jpg'  = 'image/jpeg'
            '.jpeg' = 'image/jpeg'
            '.gif'  = 'image/gif'
            '.svg'  = 'image/svg+xml'
            '.ico'  = 'image/x-icon'
            '.woff2'= 'font/woff2'
        }
        $mime = if ($mimeTypes[$ext]) { $mimeTypes[$ext] } else { 'application/octet-stream' }
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentType = $mime
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $($request.Url.LocalPath)")
        $response.OutputStream.Write($msg, 0, $msg.Length)
    }

    $response.OutputStream.Close()
}
