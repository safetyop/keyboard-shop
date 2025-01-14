import pandas as pd

# แก้ไขให้ข้อมูลในทุกคอลัมน์มีจำนวนรายการเท่ากัน
data = {
    'Name': [
        'Keychron K2 Max QMK', 'Keychron K10 Max QMK', 'Keychron K4 Max QMK', 'Keychron K5 Max QMK',
        'Keychron K17 Max QMK', 'Keychron K3 Pro 75%', 'Keychron K1 SE', 'Keychron K3 75%',
        'Keychron K5 SE', 'Keychron K7 Max QMK', 'Keychron K11 Max Alice', 'Keychron K13 Max QMK',
        'Keychron K17 Pro QMK', 'Keychron K4 V2', 'Keychron K6', 'Keychron K8 Pro QMK',
        'Keychron K2 V2', 'Keychron K6 Pro', 'Keychron K3 V2', 'Keychron K8 SE', 'Keychron K7 V2',
        'Keychron K13 V2', 'Keychron K5 Pro', 'Keychron K10 Pro', 'Keychron K12 Alice',
        'Keychron K18 Pro', 'Keychron K1 Pro', 'Keychron K3 Pro V2', 'Keychron K4 Alice',
        'Keychron K17 SE', 'Keychron K6 Alice', 'Keychron K9 Pro', 'Keychron K8 Max V2',
        'Keychron K14 Pro', 'Keychron K10 Alice', 'Keychron K3 SE', 'Keychron K2 Pro QMK',
        'Keychron K1 Alice', 'Keychron K16 Max'
    ],
    'Price': [
        '4,290', '4,090', '4,190', '4,290', '4,390', '3,890', '3,790', '3,690',
        '4,090', '4,190', '4,290', '4,390', '4,490', '3,990', '3,790', '4,290',
        '4,090', '4,290', '3,890', '4,090', '4,390', '4,490', '4,190', '4,090',
        '3,990', '4,290', '4,390', '4,190', '4,090', '4,290', '3,790', '4,090',
        '4,290', '3,690', '4,390', '3,790', '3,990', '4,190'
    ],
    'Image': [
        'images/keychron/1.jpg', 'images/keychron/2.jpg', 'images/keychron/3.jpg', 'images/keychron/4.jpg',
        'images/keychron/5.jpg', 'images/keychron/6.jpg', 'images/keychron/7.jpg', 'images/keychron/8.jpg',
        'images/keychron/9.jpg', 'images/keychron/10.jpg', 'images/keychron/11.jpg', 'images/keychron/12.jpg',
        'images/keychron/13.jpg', 'images/keychron/14.jpg', 'images/keychron/15.jpg', 'images/keychron/16.jpg',
        'images/keychron/17.jpg', 'images/keychron/18.jpg', 'images/keychron/19.jpg', 'images/keychron/20.jpg',
        'images/keychron/21.jpg', 'images/keychron/22.jpg', 'images/keychron/23.jpg', 'images/keychron/24.jpg',
        'images/keychron/25.jpg', 'images/keychron/26.jpg', 'images/keychron/27.jpg', 'images/keychron/28.jpg',
        'images/keychron/29.jpg', 'images/keychron/30.jpg', 'images/keychron/31.jpg', 'images/keychron/32.jpg',
        'images/keychron/33.jpg', 'images/keychron/34.jpg', 'images/keychron/35.jpg', 'images/keychron/36.jpg',
        'images/keychron/37.jpg', 'images/keychron/38.jpg'
    ],
    'Category': [
        '75%', '100%', '96%', '100%', '96%', '75%', '80%', '75%',
        '100%', '65%', '65%', '80%', '96%', '96%', '65%', '80%',
        '75%', '80%', '100%', '96%', '80%', '75%', '65%', '75%',
        '96%', '100%', '65%', '96%', '65%', '80%', '100%', '75%',
        '80%', '65%', '96%', '80%', '75%', '96%'
    ]
}

# ตรวจสอบว่าแต่ละคอลัมน์มีจำนวนรายการเท่ากัน
lengths = {key: len(value) for key, value in data.items()}
if len(set(lengths.values())) == 1:
    # ทุกคอลัมน์มีจำนวนรายการเท่ากัน
    df = pd.DataFrame(data)
    df.to_excel('Keychron_Keyboards.xlsx', index=False)
    print("File saved successfully as Keychron_Keyboards.xlsx")
else:
    print("Error: Not all columns have the same length")
