@echo off
ngrok config add-authtoken 2ohQKNuPCEIaomkIVEVU0VxVbpY_2idWx5N3A9EukCBtEVccj
start python -m http.server 8080
start ngrok http 8080
