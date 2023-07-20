# Seahorse program
from seahorse.prelude import *

declare_id('DUoSksVLHdxAFRCNcbR2WMVZk8yKXdkitH2KnjGEzhT5')

@instruction
def hello(signer: Signer): print('Hello, Seahorse!')