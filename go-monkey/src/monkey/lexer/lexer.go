package lexer

// Unicode/UTF-8をサポートするならruneの必要がある。P7

type Lexer struct {
	input        string
	position     int  // 入力における現在の位置(現在の文字を指し示す)
	readPosition int  // これから読み込む位置(現在の文字の次)
	ch           byte // 現在検査中の文字
}

func New(input string) *Lexer {
	l := &Lexer{input: input}
	l.readChar()
	return l
}

func (l *Lexer) readChar() {
	if l.readPosition >= len(l.input) {
		l.ch = 0 // ASCIIのNULL文字。「まだ何も読み込んでいない」か「ファイルの終わり」を表す
	} else {
		l.ch = l.input[l.readPosition]
	}
	l.position = l.readPosition
	l.readPosition += 1
}
