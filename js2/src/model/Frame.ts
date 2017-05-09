#include <util/QueuedPainter.ts>

abstract class Frame {
	public abstract name() : string;
	public abstract draw(painter : QueuedPainter) : void;
}