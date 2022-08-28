import React from 'react';

export default function Student() {
	return (
		<div className="student">
			<h1>
				Students<span>(#)</span>
			</h1>
			<div className="student-container">
				<p>
					John <small> attends </small>
					Brooklyn College
				</p>
				<details>
					<summary>details about John</summary>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
					quisquam accusamus libero magni porro, dolores natus nemo corporis
					autem quae eaque enim facere aliquam. Ipsum quae in culpa quisquam
					eveniet?
				</details>
			</div>
		</div>
	);
}
