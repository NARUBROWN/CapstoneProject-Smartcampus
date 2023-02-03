from keras.models import load_model
from PIL import Image, ImageOps
import numpy as np
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r'*': {'origins': '*'}}, supports_credentials=True)

# CORS 설정
ip = "192.168.50.109"
CORS(app, resources={r'/file_upload/*': {'origins': "http://" + ip + ":8080"},}, supports_credentials=True)


def ai(file):
    np.set_printoptions(formatter={'float_kind': lambda x: "{0:0.10f}".format(x)})

    model = load_model('keras_model.h5')

    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    image = Image.open(file)

    size = (224, 224)
    image = ImageOps.fit(image, size, Image.ANTIALIAS)

    image_array = np.asarray(image)

    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1

    data[0] = normalized_image_array

    prediction = model.predict(data)

    new_list = []
    result_number = 0

    for e in range(0, len(prediction[0])):
        result = round(prediction[0][e] * 100)
        new_list.append(result)

    max_value = max(new_list)

    for a in range(0, len(new_list)):
        # 값 넣다가
        variable = new_list[a]
        if variable == max_value:
            result_number = a

    ai_result = []

    print(max_value)
    if max_value <= 95:
        ai_result.append({
            'location': '인공지능이 사진에서 위치를 찾을 수 없었습니다.',
            'building': '',
            'department': '',
            'name': '찾을 수 없음',
            'description': '지형지물이 잘 나오게 다시 찍어주세요',
            'img': 'No_result'
            # @/assets/campus_navigator/.png
        })

    if result_number == 0:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '강의동',
            'department': 'AI학부',
            'name': '복도',
            'description': '강의실과 교수 연구실이 연결되어 있는 복도입니다.',
            'img': 'ThirdFloor_Hallway'
        })
    elif result_number == 1:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '강의동',
            'department': 'AI학부',
            'name': '로비',
            'description': '정수기와 화장실, 계단이 있는 공간입니다.',
            'img': 'ThirdFloor_Lobby'
        })
    elif result_number == 2:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '강의동',
            'department': '송도바이오생명과',
            'name': '로비',
            'description': '정수기와 화장실, 계단이 있는 공간입니다.',
            'img': 'SecondFloor_ Lobby'
        })
    elif result_number == 3:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '강의동',
            'department': '송도바이오생명과',
            'name': '복도',
            'description': '강의실과 교수 연구실이 연결되어 있는 복도입니다.',
            'img': 'SecondFloor_ Hallway'
        })
    elif result_number == 4:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '강의동',
            'department': '',
            'name': '로비',
            'description': '정수기와 화장실, 계단이 있는 공간입니다.',
            'img': 'GroundFloor_Lobby'
        })
    elif result_number == 5:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '강의동',
            'department': '',
            'name': '학술정보관',
            'description': '자율 학습을 할 수 있는 공간입니다.',
            'img': 'Library'
        })
    elif result_number == 6:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '강의동',
            'department': '',
            'name': '복도',
            'description': '강의실과 학과사무실, 컨퍼런스룸이 연결되어 있는 공간입니다.',
            'img': 'GroundFloor_Hallway'
        })
    elif result_number == 7:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '',
            'department': '',
            'name': '강의동',
            'description': 'AI학부와 송도바이오생명과가 수업을 하는 공간입니다.',
            'img': 'Lecture'
        })
    elif result_number == 8:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '',
            'department': '',
            'name': '행복기숙사',
            'description': '학습 후 휴식할 수 있는 공간입니다.',
            'img': 'Dormitory'
        })
    elif result_number == 9:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '행복기숙사',
            'department': '',
            'name': '학생식당',
            'description': '점심과 석식을 제공하는 공간입니다.',
            'img': 'Restaurant'
        })
    elif result_number == 10:
        ai_result.append({
            'location': '인천재능대학교 송도캠퍼스',
            'building': '행복기숙사',
            'department': '',
            'name': '무인 편의점',
            'description': '학과사무실에서 키를 빌리고 이용할 수 있는 공간입니다.',
            'img': 'Convenience'
        })

    return ai_result


@app.route('/')
def index():
    return render_template('file_upload.html')


@app.route('/file_upload', methods=['GET', 'POST'])
def file_upload():
    if request.method == 'POST':
        file = request.files['file']
        file.save("img/" + secure_filename(file.filename))
        print(file.filename)
        return ai("img/" + file.filename)
    else:
        return render_template('file_upload.html')

# 3층복도, 3층로비, 2층로비, 2층복도, 1층로비, 학술 정보관, 1층복도, 강의동, 기숙사, 학생 식당, 무인 편의점
