##!"C:\\Users\\Karunesh\\AppData\\Local\\Programs\\Python\\Python36\python.exe"
##############/home/abhishek/vir/enve/bin/python3.6

import pathlib
myCurr_path=str(pathlib.Path(__file__).parent.absolute())
#print(myCurr_path)
import sys
from easyfacenet.simple import facenet
#print(sys.argv[1])
#print(str(sys.argv[1]))
images = [myCurr_path+'/aadhar_data/'+sys.argv[1]+ '/1.jpeg', myCurr_path+'/aadhaar_data/'+sys.argv[1]+ '/2.jpeg']
aligned = facenet.align_face(images)
comparisons = facenet.compare(aligned)
print(str(int(comparisons[0][1])))

sys.stdout.flush()
