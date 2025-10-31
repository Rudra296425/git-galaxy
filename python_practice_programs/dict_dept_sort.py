students = [
    {"name": "Ashish", "dept": "sales", "roll no": 34},
    {"name": "Sushmita", "dept": "hr", "roll no": 33},
    {"name": "Jeevika", "dept": "sales", "roll no": 35}
]

# Group by dept
dept_dict = {}
for s in students:
    dept = s["dept"]
    if dept not in dept_dict:
        dept_dict[dept] = []
    dept_dict[dept].append(s)

print(dept_dict)