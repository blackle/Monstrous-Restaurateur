#include <util/QueuedPainter.ts>
#include "SceneBase.ts"

abstract class Scene extends SceneBase {
	protected qp : QueuedPainter;
	public constructor() {
		super();
		this.qp = new QueuedPainter();
	}
}