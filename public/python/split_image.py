#! python3
import sys
import glob, os
#`mport Image

#import PIL
from PIL import Image




import os
import glob

def crop(im,height,width):
    # im = Image.open(infile)
    imgwidth, imgheight = im.size
    for i in range(imgheight/height):
        for j in range(imgwidth/width):
            # print (i,j)
            box = (j*width, i*height, (j+1)*width, (i+1)*height)
            yield im.crop(box)

if __name__=='__main__':
    # change the path and the base name of the image files 
    imgdir = '../img'
    basename = '*.jpg'
    filelist = glob.glob(os.path.join(imgdir,basename))
    for filenum,infile in enumerate(filelist):
        # infile='/Users/alex/Documents/PTV/test_splitter/cal/Camera 1-1-9.tif'
        print (filenum) # keep the numbers as we change them here
        print (infile)
        
        im = Image.open(infile)
        imgwidth, imgheight = im.size
        print ('Image size is: %d x %d ' % (imgwidth, imgheight))
        height = imgheight/2
        width =  imgwidth/2
        start_num = 0
        for k,piece in enumerate(crop(im,height,width),start_num):
            # print k
            # print piece
            print('testing')
            img=Image.new('L', (width,height), 255)
            # print img
            img.paste(piece)
            path = os.path.join("cam%d_1%05d.tif" % (int(k+1),filenum))
            img.save(path)
            os.rename(path,os.path.join("cam%d.1%05d" % (int(k+1),filenum)))
    
#    print(image.split)
#    os.mkdir (os.path.splitext(file)[0])

#    os.chdir(os.path.splitext(file)[0])

 #   image_slicer.split_image(file,2)

    print(file)












