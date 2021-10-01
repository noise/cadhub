import { useIdeContext } from 'src/helpers/hooks/useIdeContext'
import SocialCardCell from 'src/components/SocialCardCell/SocialCardCell'

function TabContent() {
  const { project } = useIdeContext()

  return (
    <div className="bg-ch-gray-800 h-full">
      <h3 className="text-2xl text-ch-gray-300 p-8">Set social Image</h3>
      <div className="flex justify-center pt-20">
        <div className="rounded-md shadow-ch border border-gray-400 overflow-hidden">
          <div
            className="transform scale-50 origin-top-left"
            style={{ width: '600px', height: '315px' }}
          >
            <div style={{ width: '1200px', height: '630px' }}>
              <SocialCardCell
                userName={project.user.userName}
                projectTitle={project.title}
                isLiveCard={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SocialCardModal({ TheButton }) {
  const { state, thunkDispatch } = useIdeContext()

  return (
    <TheButton
      onClick={() => {
        thunkDispatch({
          type: 'addEditorModel',
          payload: {
            type: 'component',
            label: 'Social Media Card',
            Component: TabContent,
          },
        })
        thunkDispatch({
          type: 'switchEditorModel',
          payload: state.editorTabs.length,
        })
      }}
    />
  )
}
