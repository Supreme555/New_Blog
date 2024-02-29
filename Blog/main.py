# pip install flask
# pip install flask_cors
from flask import Flask, Response
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


fake_news_list = [
    {
        'id': 1,
        'title': 'Секреты искусства украшения елки: новые тренды этого года',
        'description': 'Эксперты делятся секретами украшения елки в этом году. Узнайте, как сделать вашу елку яркой и стильной.',
        'image_url': 'https://sevastopol-news.com/img/20211213/1dd899049f699fe9cc831ad66149b503.jpg',
        'image_url_2': 'https://mail.kz/upload/media/5a6b9c0eda607c71216d5df90c4922d2.jpg',
        'image_url_3': 'https://www.ivd.ru/images/cache/2023/10/24/fit_960_530_false_crop_1000_562_0_52_q90_3192192_aafca06587af10b6a1ef20797.jpeg',
        'created_date': '2023-12-15',
        'price': 0.1
    },
    {
        'id': 2,
        'title': 'Топ-10 подарков для детей на Рождество',
        'description': 'Выбор подарков для детей может быть сложным. Мы подготовили список лучших подарков, которые порадуют любого малыша.',
        'image_url': 'https://sravni-news-prod.storage.yandexcloud.net/uploads/2021/12/126658-ec22b6a70cf57d0ca7dd3a5e69922c2a-1024x683.jpg',
        'image_url_2': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbsroLVinHJPaWipLC8sQSsP5flEIe5zLStl44lwNrMp8vcZj4DRYI6WsbzGTDwd9h_o&usqp=CAU',
        'image_url_3': 'https://mamainthecity.ru/upload/medialibrary/00e/tkan-i-bumaga.jpg',
        'created_date': '2023-12-14',
        'price': 0.09
    },
    {
        'id': 3,
        'title': 'Рождественский ярмарка: где найти волшебство ближе к вам',
        'description': 'Исследуйте лучшие рождественские ярмарки в вашем городе. Узнайте, где можно насладиться атмосферой праздника и купить уникальные подарки.',
        'image_url': 'https://pragagid.ru/wp-content/uploads/2016/11/prague_christmas-800x533.jpg',
        'image_url_2': 'https://lh3.googleusercontent.com/proxy/o9s0Pf7ZksHgTNsfc02PNoChBgtDC1TBK3uS3IBwyVI2fs-hKpbAiZnhz41wLjOBKnvx3gtptUY7zpWKZWfaJsp43kC1pnKG-xKLLRGRSE2sqclLo4oQWFQo7S8sA2YV4WjnQg0okx00ip3jNfgs7C8J6fPrrnHGVsJ3nSk2gaRBuFEFgteyhJpw3k14l8uP',
        'image_url_3': 'https://krd.ru/upload/iblock/1ec/q8iwisg1tjzbnlykupitgmi2fdj0lwud.jpg',
        'created_date': '2023-12-13',
        'price': 0.05
    },
    {
        'id': 4,
        'title': 'Как создать идеальное рождественское угощение',
        'description': 'Шеф-повар делится секретами создания великолепных рождественских блюд. Удивите своих гостей вкусными угощениями!',
        'image_url': 'https://www.edimdoma.ru/data/posts/0002/4296/24296-ed4_wide.jpg?1668779820',
        'image_url_2': 'https://cs13.pikabu.ru/post_img/big/2023/12/19/5/1702971199146070904.jpg',
        'image_url_3': 'data:image/jpeg;base64,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',
        'created_date': '2023-12-12',
        'price': 0.15
    },
    {
        'id': 5,
        'title': 'НАПОЛЕОН БОНАПАРТ: МУЗА И ПАМЯТНИК В ИСКУССТВЕ',
        'description': 'Наполеон Бонапарт, величайшая фигура в мировой истории, оказал неизгладимое влияние на мир искусства. Его время было отмечено значительными изменениями не только в политике и обществе, но и в сфере изобразительного искусства. Влияние искусства Наполеона выходит далеко за рамки его правления, демонстрируя его политическую мощь и его собственную харизматическую личность.',
        'image_url': 'https://images.joseartgallery.com/109054/napoleon-bonaparte-a-muse-and-monument-in-art.jpg',
        'image_url_2': 'https://images.joseartgallery.com/content/_214-1705274235-thumb800.jpg',
        'image_url_3': 'https://images.joseartgallery.com/content/_214-1705274550-thumb800.jpg',
        'created_date': '2023-12-26',
        'price': 0.20
    },
    {
        'id': 6,
        'title': 'Что такое IT: виды технологий и сферы их применения',
        'description': 'Что такое IT? Это сокращение словосочетания Information Technology, которое в переводе с английского звучит как «информационные технологии». IT – это процессы создания, хранения, обмена информацией, а также способы реализации этих процессов.',
        'image_url': 'https://gb.ru/blog/wp-content/uploads/2022/05/linkedin-sales-navigator-wS73LE0GnKs-unsplash.jpg.webp',
        'image_url_2': 'https://gb.ru/blog/wp-content/uploads/2022/05/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.jpg.webp',
        'image_url_3': 'https://gb.ru/blog/wp-content/uploads/2022/05/pexels-buro-millennial-1438081-1.jpg.webp',
        'created_date': '2023-12-23',
        'price': 0.25
    },
    {
        'id': 7,
        'title': 'Рецепт приготовления традиционного блюда ',
        'description': '«Наурыз коже» — традиционный ритуальный суп в казахской кухне. Его готовят к празднику Наурыз, знаменующему обновление природы и наступление весны. Ингредиенты классического блюда могут варьироваться, но в рецепт всегда входят семь компонентов. Это мясо, вода, соль, масло, молоко, злаки и мука. Они символизируют изобилие, здоровье, удачу и счастье.',
        'image_url': 'https://cdn.nur.kz/images/1120x630/bd71d3292884cb1d.webp?version=1',
        'image_url_2': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr54l-S_aahmjTXW8dAEdhZjRdgxuUwz28Mj-rtR9oHx7A3t6Ao9UiH9Wom5cTH3Td1jQ&usqp=CAU',
        'image_url_3': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJp8fLbXmqfs2vpsln4pebuYUF_v9m8sf2ChEjWjy5Pek8tiZXWLSSB4NnLyHojLuQlc&usqp=CAU',
        'created_date': '2023-12-22',
        'price': 0.40
    },
    {
        'id': 8,
        'title': 'Наурыз – праздник весеннего обновления',
        'description': 'В Казахстане весна теснит зиму и полноценно вступает в свои права 21 марта – именно в этот особенный день отмечается светлый праздник Наурыз, знаменующий собой не только весеннее равноденствие, но и обновление природы. Наурыз в Казахстане символизирует плодородие, дружбу и любовь. В этот день люди одеваются нарядно, ходят в гости к родным и близким и не смолкают добрые пожелания. Для восточных народов Наурыз всё равно, что Новый Год, ведь оба праздника считаются вестниками новой жизни. Праздник Наурыз на персидском языке означает не что иное как «новый день».',
        'image_url': 'https://www.advantour.com/img/kazakhstan/holidays/kazakhstan-nauryz2_sm.jpg',
        'image_url_2': 'https://www.advantour.com/img/kazakhstan/holidays/kazakhstan-nauryz.jpg',
        'image_url_3': 'https://www.advantour.com/img/kazakhstan/holidays/kazakhstan-nauryz1_sm.jpg',
        'created_date': '2023-12-25',
        'price': 0.70
    },
    {
        'id': 9,
        'title': 'Пряничные домики: история и рецепт приготовления',
        'description': 'Сдобные домики были уже в Древнем Риме, жители которого готовили их не только с целью употребить в пищу, но, прежде всего, чтобы поселить в них своих богов. Испеченный домик сначала помещался на домашний алтарь, боги его обживали, а потом домочадцы с огромным аппетитом и осознанием святости пищи съедали домик за семейным столом. Таким образом, полагали они, происходило их соединение с божественными силами.',
        'image_url': 'https://avatars.dzeninfra.ru/get-zen_doc/108104/pub_59b8fcd655876b1201eb9fe4_59b8fd0877d0e6b8fac17ea6/scale_1200',
        'image_url_2': 'https://www.cookiecraft.ru/spree/ckeditor_assets/pictures/69/content_mg_5765_as_smart_object-1_1.jpg',
        'image_url_3': 'https://www.cookiecraft.ru/spree/ckeditor_assets/pictures/72/content_dom_shag2.jpg',
        'created_date': '2023-12-20',
        'price': 1
    },
    {
        'id': 10,
        'title': 'Революция в кулинарии эпохи Возрождения',
        'description': 'В эпоху Возрождения произошла настоящая революция в кулинарии. Это время было отмечено не только открытием новых географических территорий, но и расширением гастрономических возможностей. Мореплаватели привезли с собой экзотические продукты, которые стали основой для создания новых блюд. Одним из ключевых событий этого периода стало открытие Америки Христофором Колумбом. С его путешествиями в Европу были привезены такие продукты, как картофель, помидоры и фасоль. Они стали неотъемлемой частью европейской кухни и дали возможность приготовления новых уникальных блюд.',
        'image_url': 'https://avatars.dzeninfra.ru/get-zen_doc/10933691/pub_64d895284e2a872cc40183a4_64d896f3988c397938f20ece/scale_1200',
        'image_url_2': 'https://avatars.dzeninfra.ru/get-zen_doc/1711517/pub_64d895284e2a872cc40183a4_64d89614cf55584e18c5da95/scale_1200',
        'image_url_3': 'https://avatars.dzeninfra.ru/get-zen_doc/10102044/pub_64d895284e2a872cc40183a4_64d89690fb757f7c7bf4a42f/scale_1200',
        'created_date': '2023-12-28',
        'price': 0.60
    },
]


@app.route('/', methods=['GET'])
def get_fake_news():
    fake_news = fake_news_list
    response_data = json.dumps(fake_news, ensure_ascii=False)
    return Response(response=response_data, content_type="application/json; charset=utf-8")


if __name__ == '__main__':
    app.run(debug=True)
