from PIL import Image
import os

def crop(img):
    
    im = Image.open(img)
    img_width, img_height = im.size

    box1 = (0, 0, img_width//2, img_height//2)              # top left to center
    box2 = (0, img_height//2, img_width//2, img_height)       # bottom left to center
    box3 = (img_width//2, 0, img_width, img_height//2)              # center to top right
    box4 = (img_width//2, img_height//2, img_width, img_height)       # center to bottom right

    directory = "/Users/Mostapha/Desktop/projects/hack_western_4/app/public/images/"
    count = 1;

    # try:
    os.system('mkdir /Users/Mostapha/Desktop/projects/hack_western_4/app/public/images/'+img[70:83])

    # 4 equal cuts
    im.crop(box1).save(directory + img[70:83] + "/" + str(count) + ".jpeg") 
    count += 1;
    im.crop(box2).save(directory + img[70:83] + "/" + str(count) + ".jpeg") 
    count += 1;        
    im.crop(box3).save(directory + img[70:83] + "/" + str(count) + ".jpeg") 
    count += 1;        
    im.crop(box4).save(directory + img[70:83] + "/" + str(count) + ".jpeg") 
    count += 1;        
    # except:
    #     print("son of a cunt")
    #     pass


crop("/Users/Mostapha/Desktop/projects/hack_western_4/app/public/images/test1511034496528.jpeg")