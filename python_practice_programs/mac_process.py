import psutil
import socket

net_if_addrs = psutil.net_if_addrs()

mac_address = None

for interface, addrs in net_if_addrs.items():
    for addr in addrs:
        if addr.family == psutil.AF_LINK or (hasattr(socket,'AF_LINK') and addr.family == socket.AF_LINK):
            if addr.address and addr.address != '00:00:00:00:00:00':
                mac_address = addr.address
                break
    if mac_address:
        break

print(f"MAC Adress: {mac_address}")

processes = list(psutil.process_iter(['pid', 'name', 'cpu_percent']))

for proc in processes:
    try:
        proc.cpu_percent(interval=None)
    except (psutil.NoSuchProcess, psutil.AccessDenied):
        continue

import time
time.sleep(1)

max_cpu = 0
top_proc = None

for proc in processes:
    try:
        cpu = proc.cpu_percent(interval=None)
        if cpu > max_cpu:
            max_cpu = cpu
            top_proc = proc
    except (psutil.NoSuchProcess, psutil.AccessDenied):
        continue

if top_proc:
    print(f"Top CPU Process: PID={top_proc.info['pid']}, Name={top_proc.info['name']}, CPU%={max_cpu}")
else:
    print("No process information available")
